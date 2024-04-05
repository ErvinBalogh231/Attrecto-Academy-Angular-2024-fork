import { Component, Input } from '@angular/core';
import { Badge } from '../../classes/badge';

@Component({
  selector: 'app-badge-card',
  templateUrl: './badge-card.component.html',
  styleUrl: './badge-card.component.scss'
})
export class BadgeCardComponent {
  @Input() badge: Badge
}
