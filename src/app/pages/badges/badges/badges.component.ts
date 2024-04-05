import { Component, OnInit } from '@angular/core';
import { BadgeService } from '../Services/badge.service';
import { Badge } from '../classes/badge';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrl: './badges.component.scss'
})
export class BadgesComponent implements OnInit {
  badges: Badge[]

  constructor(private badgeService: BadgeService) {
  }

  ngOnInit() {
    this.getBadges()
  }
  getBadges(){
    this.badgeService.getBadges().subscribe({
      next: (badges: Badge[]) => {
        this.badges = badges
      }
    })
  }
}
