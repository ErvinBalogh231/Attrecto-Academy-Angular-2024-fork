import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UserCardComponent } from './user-card/user-card.component';
import { BadgesModule } from '../badges/badges.module';

@NgModule({
  declarations: [UsersComponent, UserCardComponent],
  imports: [
    CommonModule,
    BadgesModule,
  ],
})
export class UsersModule { }
