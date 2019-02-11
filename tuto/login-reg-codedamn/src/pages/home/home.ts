import { ItemPage } from './../item/item';
import { AdminPage } from './../admin/admin';
import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { NativeStorage } from '@ionic-native/native-storage';
import { DatataPage } from '../datata/datata';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user: string;
  name: string;
  email: string;
  inputText: string;
  password;

  picToView; 

  
  // @ViewChild('username') user;
  // @ViewChild('email') email;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public nativeStorage: NativeStorage) {
    this.user = this.navParams.get('user');
    this.name = this.navParams.get('name');
    this.email = this.navParams.get('email');
    this.picToView = this.navParams.get('picToView');
  }

  admin() {
    if(this.password == "asd") {
      this.navCtrl.push(AdminPage);
    }
    else {
      const alert = this.alertCtrl.create({
        title: 'INVALID ID',
        subTitle: 'Please login if you are not an admin!',
        buttons: ['FINE']
      });
      alert.present();
      location.reload();
    }
  }

  signIn() {
    if(!this.inputText) {
      let alert = this.alertCtrl.create({
        title: 'Login Invalid!',
        subTitle: 'Username cannot be empty',
        buttons: ['OK']
      });
      alert.present();
    }
    else {
      if(this.inputText == this.user){
        let alert = this.alertCtrl.create({
          title: 'Login Successful!',
          subTitle: 'You are logged in',
          buttons: ['OK']
        });
        alert.present();
        this.inputText = null;
        this.navCtrl.push(ItemPage, {user: this.user, name: this.name, email: this.email, picToView: this.picToView});
      }

        else {
            let alert = this.alertCtrl.create({
              title: 'Login Invalid!',
              subTitle: 'Please enter a valid username',
              buttons: ['OK']
            });
            alert.present();
      }
    }
  }

  registerNow() {
    this.navCtrl.push(RegisterPage,);
  }

}
