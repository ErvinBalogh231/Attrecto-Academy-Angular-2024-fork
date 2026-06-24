import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { CounterComponent } from './shared/counter/counter.component';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { UsersModule } from './pages/users/users.module';
import { BadgesModule } from './pages/badges/badges.module';
import {HttpClientModule} from "@angular/common/http";
import {UserCreateModule} from "./pages/user-create/user-create.module";
import {UserEditModule} from "./pages/user-edit/user-edit.module";
import { BadgeEditModule } from './pages/badge-edit/badge-edit.module';
import { BadgeCreateModule } from './pages/badge-create/badge-create.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HeaderComponent,
    CounterComponent,
    RouterOutlet,
    AppRoutingModule,
    UsersModule,
    BadgesModule,
    HttpClientModule,
    UserEditModule,
    UserCreateModule,
    BadgeEditModule,
    BadgeCreateModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
