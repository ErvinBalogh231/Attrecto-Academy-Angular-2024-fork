import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { CardListViewComponent } from './card-list-view/card-list-view.component';
import { TableListViewComponent } from './table-list-view/table-list-view.component';

@NgModule({
  declarations: [UsersComponent, CardListViewComponent, TableListViewComponent],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
