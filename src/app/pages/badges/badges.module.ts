import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgesComponent } from './badges/badges.component';
import { BadgeCardComponent } from './components/badge-card/badge-card.component';



@NgModule({
  declarations: [BadgesComponent, BadgeCardComponent],
  exports: [
    BadgesComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class BadgesModule { }
