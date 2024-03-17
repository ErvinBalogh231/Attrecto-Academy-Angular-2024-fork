import { Component, Input } from '@angular/core';
import { User } from '../classes/User';

@Component({
  selector: 'app-table-list-view',
  templateUrl: './table-list-view.component.html',
  styleUrl: './table-list-view.component.scss'
})
export class TableListViewComponent {
  @Input() users: User[];
  protected readonly User = User;
}
