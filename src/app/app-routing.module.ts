import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { SocialsComponent } from './socials/socials.component';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'socials', component: SocialsComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
