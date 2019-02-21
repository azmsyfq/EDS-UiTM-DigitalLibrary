import { UsersPage } from './../users/users.page';
import { Component, ViewChild, OnInit } from '@angular/core';
import { StorageService, User } from '../../services/storage.service';
import { Platform, AlertController, ToastController, IonList } from '@ionic/angular';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})

// interface User {
//   id: number;
//   username: string;
//   confirm: string;
//   email: string;
//   modified: number;
//   myimage: string;
//   ava: number;
// }
export class ProfilePage {

  users: User[] = [];
  oldUser: User = <User>{};


  username: any;
  email;
  image: any;

  @ViewChild('mylist') mylist: IonList;
  navCtrl: any;
  destination: any;

  constructor(
    private storageService: StorageService,
    private plt: Platform,
    private toastController: ToastController,
    public alertCtrl: AlertController
  ) {
    // this.plt.ready().then(() => {
    //   this.loadUsers();
    // });

    this.oldUser = this.storageService.getDestn();
    this.username = this.oldUser.username;
    this.email = this.oldUser.email;
    this.image = this.oldUser.ava;
    // console.log(this.oldUser.username);
  }

  logout() {
    this.username = null;
    this.email = null;
    this.image = null;
  }


  // loadUsers() {
  //   this.storageService.getUsers().then(data => {
  //     this.users = data;
  //   });
  //   console.log(this.users.length);
  // }

  // loadUsers() {
  //   // if (this.oldUser.ava === 3) {
  //   //   this.image = 'assets/imgs/cat.png';
  //   // } else {
  //   //   this.image = null;
  //   // }

  //   try {
  //     this.oldUser = this.username.find(x => x.username === this.username).username;
  //     if (this.oldUser.username === this.username) {
  //       this.username = 'alaaaaaaaao';
  //       this.dialogSuc();
  //     }
  //   } catch (error) {
  //     this.dialogFail();
  //   }
  // }

  // async dialogSuc() {
  //   const alert = await this.alertCtrl.create({
  //     header: 'zzzzzzzzzz!',
  //     subHeader: 'You are logged in',
  //     buttons: ['OK']
  //   });
  //   await alert.present();
  //   this.oldUser = null;
  // }

  // async dialogFail() {
  //   const alert = await this.alertCtrl.create({
  //     header: 'Login Invalid!',
  //     subHeader: 'asdasdasddas valid username',
  //     buttons: ['OK']
  //   });
  //   await alert.present();
  //   this.oldUser = null;
  // }

}
