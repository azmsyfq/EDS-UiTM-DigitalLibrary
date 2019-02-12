import { RegisterPage } from '../register/register';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username: string;
  password: string;

  constructor(public navCtrl: NavController) {

  }

  login(){
    console.log("Username: ", this.username);
    console.log("Password: ", this.password);
  }

  registerNow(){
    this.navCtrl.push(RegisterPage);
  }
}
