import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Badge } from '../../classes/badge';

@Component({
  selector: 'app-badge-card',
  templateUrl: './badge-card.component.html',
  styleUrl: './badge-card.component.scss'
})
export class BadgeCardComponent {
  @Input() badge: Badge
  @Output() deleteClicked = new EventEmitter<number>

  deleteBadge(id:number, event: MouseEvent) {
    event.stopPropagation()

    this.deleteClicked.emit(id)
  }
}
