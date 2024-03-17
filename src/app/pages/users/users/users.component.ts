import {Component, OnInit} from '@angular/core';
import { User } from '../classes/User';
import {UserService} from "./services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit{
  users: User[];
  isCardView: boolean;

  constructor(private userService: UserService, private router:Router) {
  }

  ngOnInit() {
    this.getUsers()
    this.isCardView = true;
  }

  private getUsers() {
    this.userService.getUsers().subscribe({
      next: (users)=> {
        this.users = users
      }
    })
  }

  setView(setView: boolean){
    this.isCardView = setView;
  }

  navigateToCreateUser() {
    this.router.navigate(['user-create']);
  }
}
