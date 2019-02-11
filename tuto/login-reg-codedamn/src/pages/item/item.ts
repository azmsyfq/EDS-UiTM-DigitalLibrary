import { Component } from '@angular/core';
import { NavController, NavParams, App, MenuController } from 'ionic-angular';

import { NativeStorage } from '@ionic-native/native-storage';


@Component({
  selector: 'page-item',
  templateUrl: 'item.html',
})
export class ItemPage {

   user: string;
   name: string;
   email: string;
   picToView:''; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public nativeStorage: NativeStorage, app: App, menu: MenuController) {
    this.user = this.navParams.get('user');
    this.name = this.navParams.get('name');
    this.email = this.navParams.get('email');
    this.picToView = this.navParams.get('picToView');
    menu.enable(true);

  }
}