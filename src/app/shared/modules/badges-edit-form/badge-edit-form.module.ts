import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeEditFormComponent } from './badge-edit-form.component';
import { IsControlRequiredPipe } from './pipes/is-control-required.pipe';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [IsControlRequiredPipe, BadgeEditFormComponent],
  exports:[
    BadgeEditFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
})
export class BadgeEditFormModule { }
