import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../pages/users/classes/User";
import { UserService } from '../../../pages/users/users/services/user.service';
import { Router } from '@angular/router';
import { BadgeService } from '../../../pages/badges/Services/badge.service';
import { Badge } from '../../../pages/badges/classes/badge';
import { UserBadge } from '../../../pages/users/classes/UserBadge';

@Component({
  selector: 'app-user-edit-form',
  templateUrl: './user-edit-form.component.html',
  styleUrl: './user-edit-form.component.scss'
})
export class UserEditFormComponent implements OnInit{
  @Input() user:User

  selectedBadges: {[key: string]: boolean} = {};
  userCrateForm: FormGroup
  allAvailableBadges: Badge[]

  constructor(private userService: UserService, private badgeService: BadgeService, private router: Router) {
  }

  ngOnInit(): void {
    this.initForm();
    this.getBadges();
    this.initBadgeSelector();
  }

  initForm() {
    this.userCrateForm = new FormGroup({
      name: new FormControl(this.user ? this.user.name :'', [Validators.required, Validators.minLength(3)],),
      image: new FormControl(this.user ? this.user.image : '',[Validators.required])
    })
  }

  saveForm(){
    const  userFormData: User = this.userCrateForm.getRawValue();
    userFormData.badges = this.mapSelectedBadgesToUserBadges();

    if(this.user) {
      this.userService.updateUser(this.user.id, userFormData).subscribe({
        next: () => {
          this.router.navigate(['users'])
        }
      })
    } else {
      this.userService.createUser(userFormData).subscribe({
        next: () => {
          this.router.navigate(['users'])
        }
      })
    }
  }

  mapSelectedBadgesToUserBadges(): UserBadge[] {
    return Object.keys(this.selectedBadges).filter((badgeId) => {
      return this.selectedBadges[badgeId.toString()] === true;
    }).map((badgeId) => {
      return {
        id: parseInt(badgeId)
      }
    })
  }

  initBadgeSelector() {
    for (const userBadge of this.user.badges) {
      console.log(userBadge.id);
      this.selectedBadges[userBadge.id.toString()] = true;
    }
  }

  toggleSelectedBadges(id: number) {
    this.selectedBadges[id.toString()] = !this.selectedBadges[id.toString()];
  }

  getIfSelected(id:number) {
    return this.selectedBadges[id.toString()];
  }

  getBadges(){
    this.badgeService.getBadges().subscribe({
      next: (badges:Badge[]) => {
        this.allAvailableBadges = badges
      }
    })
  }

}
