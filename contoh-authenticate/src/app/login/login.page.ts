import { Component } from '@angular/core';
import { NavController, AlertController, ToastController, Platform } from '@ionic/angular';
import { StorageService, User } from '../services/storage.service';
import { stringify } from '@angular/core/src/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  users: User[] = [];

  oldUser: string;
  inputUser: null;
  adminID: string;
  test: any;

  formToView = false;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
    private storageService: StorageService, private plt: Platform,
    private toastController: ToastController) {
  }

  changeForm() {
    this.formToView = true;
  }

  changeFormAgain() {
    this.formToView = false;

  }

  gotoFinalView(destn) {
    this.storageService.setDestn(destn);
    this.navCtrl.navigateForward('profile');
  }

  signIn() {
    this.storageService.getUsers().then(data => {
      try {
        this.oldUser = data.find(x => x.username === this.inputUser).confirm;
        if (this.inputUser === this.oldUser) {
          // this.navCtrl.navigateRoot('profile');
          this.dialogSuc();
          this.test = data.find(x => x.username === this.inputUser);
          this.gotoFinalView(this.test);
        }
      } catch (error) {
        this.dialogFail();
      }
    });
  }

  async dialogSuc() {
    const alert = await this.alertCtrl.create({
      header: 'Login Successful!',
      subHeader: 'You are logged in',
      buttons: ['OK']
    });
    await alert.present();
    this.inputUser = null;
  }

  async dialogFail() {
    const alert = await this.alertCtrl.create({
      header: 'Login Invalid!',
      subHeader: 'Please enter a valid username',
      buttons: ['OK']
    });
    await alert.present();
    this.inputUser = null;
  }


  async signInAdmin() {
    if (!this.adminID) {
      const alert = await this.alertCtrl.create({
        header: 'Invalid!',
        subHeader: 'Please enter ID',
        buttons: ['OK']
      });
      await alert.present();

    } else {
      if (this.adminID === 'asdf') {
        const alert = await this.alertCtrl.create({
          header: 'Hello!',
          subHeader: 'Hai',
          buttons: ['OK']
        });
        await alert.present();
        this.navCtrl.navigateRoot('users');
        this.adminID = null;

      } else {
        const alert = await this.alertCtrl.create({
          header: 'Invalid!',
          subHeader: 'Please login if you are not an admin',
          buttons: ['OK']
        });
        await alert.present();
        this.navCtrl.navigateRoot('/login');
        this.adminID = null;

      }
    }
  }

}
