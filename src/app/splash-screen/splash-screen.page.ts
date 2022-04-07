import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SpalshScreenModelComponent } from '../components/spalsh-screen-model/spalsh-screen-model.component';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
})
export class SplashScreenPage implements OnInit {

  constructor(private modelCtrl: ModalController) { }

  ngOnInit() {
  }
 async _openModel(){
    console.log('model open')
    const modal = await this.modelCtrl.create({
      component:SpalshScreenModelComponent,
      cssClass: 'modal-css',
      breakpoints:[0,0.3,0.55,0.8],
      initialBreakpoint:0.55
    })
    return await modal.present();
  }


}
