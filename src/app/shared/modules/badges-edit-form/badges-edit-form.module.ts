import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgesEditFormComponent } from './badges-edit-form.component';



@NgModule({
  declarations: [],
  exports:[
    BadgesEditFormComponent
  ],
  imports: [
    CommonModule,
    BadgesEditFormComponent,
  ],
})
export class BadgesEditFormModule { }
