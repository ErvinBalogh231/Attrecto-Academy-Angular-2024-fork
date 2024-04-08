import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../classes/User';
import { Badge } from '../../badges/classes/badge';
import { BadgeService } from '../../badges/Services/badge.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input() user: User;
  @Input() badges: Badge[];
  @Output() deleteClicked = new EventEmitter<number>

  constructor(private badgeService: BadgeService) {
    this.getBadges()
  }

  getBadges(){
    this.badgeService.getBadges().subscribe({
      next: (badges) => {
        this.badges = badges
      }
    })
  }

  deleteUser(id:number, event:MouseEvent) {
    event.stopPropagation()

    this.deleteClicked.emit(id)
  }
}
