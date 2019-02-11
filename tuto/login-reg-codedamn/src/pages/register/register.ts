import { HomePage } from './../home/home';
import { ItemPage } from './../item/item';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user: string;
  name: string;
  email: string;

  picToView:string="/assets/imgs/logo.png";
  picToViewMan:string="/assets/imgs/man.png";
  picToViewWoman:string="/assets/imgs/woman.png";  
  picToViewCat:string="/assets/imgs/cat.png";  
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  changeViewMan(){
    this.picToView=this.picToViewMan; 
  }
  changeViewWoman(){
    this.picToView=this.picToViewWoman; 
  }
  changeViewCat(){
    this.picToView=this.picToViewCat; 
  }


  loginNow(){
    this.navCtrl.push(HomePage)
  }

  register() {
    if(!this.user) {
      let alert = this.alertCtrl.create({
        title: 'Register Invalid!',
        subTitle: 'Username cannot be empty',
        buttons: ['OK']
      });
      alert.present();
    }
    else {
      if(!this.name) {
        let alert = this.alertCtrl.create({
          title: 'Register Invalid!',
          subTitle: 'Please re-enter username',
          buttons: ['OK']
        });
        alert.present();
      }
      else {
        if(this.user != this.name){
          let alert = this.alertCtrl.create({
            title: 'Register Invalid!',
            subTitle: 'Username does not match',
            buttons: ['OK']
          });
          alert.present();
        }
        else {
          if(!this.email) {
            let alert = this.alertCtrl.create({
              title: 'Register Invalid!',
              subTitle: 'Email cannot be empty',
              buttons: ['OK']
            });
            alert.present();
          }
          else {
            let alert = this.alertCtrl.create({
              title: 'Register Successful!',
              subTitle: 'Please login!',
              buttons: ['OK']
            });
            alert.present();
            this.navCtrl.push(HomePage, {user: this.user, name: this.name, email: this.email, picToView: this.picToView});
          }
    }
      }
    }

  }

}
