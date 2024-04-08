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
  @Input() badges: Badge[]
  @Output() deleteClicked = new EventEmitter<number>

  constructor(private badgeService: BadgeService) {
    this.getBadges()
  }

  deleteUser(id:number, event:MouseEvent) {
    event.stopPropagation()
    this.deleteClicked.emit(id)
  }

  getBadges(){
    this.badgeService.getBadges().subscribe({
      next: (badges) => {
        this.badges = badges
      }
    })
  }

  getUserBadgeIds(): number[] {
    let ids = [];
    for (const badge of this.user.badges) {
      ids.push(badge.id)
    }
    return ids;
  }

  getBadgeImage(id:number): string {
    for (const badge of this.badges) {
      if (badge.id == id) {
        return badge.image
      }
    }
    return "";
  }

  protected readonly alert = alert;
}
