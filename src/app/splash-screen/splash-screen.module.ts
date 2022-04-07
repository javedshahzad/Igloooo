import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SplashScreenPageRoutingModule } from './splash-screen-routing.module';

import { SplashScreenPage } from './splash-screen.page';
import { SpalshScreenModelComponent } from '../components/spalsh-screen-model/spalsh-screen-model.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SplashScreenPageRoutingModule
  ],
  declarations: [SplashScreenPage,SpalshScreenModelComponent]
})
export class SplashScreenPageModule {}
