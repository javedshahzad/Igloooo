import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-spalsh-screen-model',
  templateUrl: './spalsh-screen-model.component.html',
  styleUrls: ['./spalsh-screen-model.component.scss'],
})
export class SpalshScreenModelComponent implements OnInit {

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {}

  _dismiss(){
    // console.log("dismiss");
    this.modalCtrl.dismiss();
  }

}
