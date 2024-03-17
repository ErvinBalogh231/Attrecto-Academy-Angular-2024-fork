import { Component, Input } from '@angular/core';
import { User } from '../classes/User';

@Component({
  selector: 'app-card-list-view',
  templateUrl: './card-list-view.component.html',
  styleUrl: './card-list-view.component.scss'
})
export class CardListViewComponent {
  @Input() users: User[];
}
