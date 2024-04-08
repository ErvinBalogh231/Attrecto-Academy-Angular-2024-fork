import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeEditComponent } from './badge-edit.component';
import { BadgeEditFormModule } from '../../shared/modules/badges-edit-form/badge-edit-form.module';
import { UserEditFormModule } from '../../shared/modules/user-edit-form/user-edit-form.module';



@NgModule({
  declarations: [BadgeEditComponent],
  imports: [
    CommonModule,
    BadgeEditFormModule,
    UserEditFormModule,
  ],
})
export class BadgeEditModule { }
