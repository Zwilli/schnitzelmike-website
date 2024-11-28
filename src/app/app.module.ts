import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SocialsComponent } from './socials/socials.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FriendsComponent } from './friends/friends.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'

const materialModules = [
  MatToolbarModule,
  MatButtonModule,
]


@NgModule({
  declarations: [
    AppComponent,
    SocialsComponent,
    WelcomeComponent,
    NavBarComponent,
    FriendsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...materialModules
  ],
  exports:[
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
