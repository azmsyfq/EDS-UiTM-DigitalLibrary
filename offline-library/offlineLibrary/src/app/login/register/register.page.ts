import { Component, ViewChild } from '@angular/core';
import { StorageService, User } from '../../services/storage.service';
import { Platform, ToastController, IonList, AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  users: User[] = [];
  newUser: User = <User>{};
  avatarChoose = false;
  oldUser: string;
  myimage = '/assets/imgs/icon.png';
  myimage1 = '/assets/imgs/icon.1.png';
  myimageMan = 'assets/imgs/man.png';
  myimageWoman = 'assets/imgs/woman.png';
  myimageCat = 'assets/imgs/cat.png';

  @ViewChild('mylist') mylist: IonList;

  constructor(public navCtrl: NavController,
    private storageService: StorageService, private plt: Platform, private toastController: ToastController,
    public alertCtrl: AlertController) {
    this.plt.ready().then(() => {
      this.loadUser();

      this.newUser.ava = this.myimage;
    });
  }

  addEvent() {
    if (this.myimage === '/assets/imgs/icon.png' ||
      this.myimage === this.myimageMan || this.myimage === this.myimageWoman || this.myimage === this.myimageCat) {
      this.myimage = '/assets/imgs/icon.1.png';
      this.avatarChoose = true;
    } else {
      this.myimage = '/assets/imgs/icon.png';
      this.avatarChoose = false;
    }
  }

  avatarMan() {
    this.myimage = this.myimageMan;
    this.avatarChoose = false;
    this.newUser.ava = this.myimage;
  }

  avatarWoman() {
    this.myimage = this.myimageWoman;
    this.avatarChoose = false;
    this.newUser.ava = this.myimage;
  }

  avatarCat() {
    this.myimage = this.myimageCat;
    this.avatarChoose = false;
    this.newUser.ava = this.myimage;
  }

  async addUser() {
    this.newUser.modified = Date.now();
    this.newUser.id = Date.now();

    if (!this.newUser.username) {
      this.regFailNameEmp();
    } else {
      if (!this.newUser.confirm) {
        this.regFailConEmp();
      } else {
        if (this.newUser.username !== this.newUser.confirm) {
          this.regFailNameNotEq();
        } else {
          if (this.newUser.username === this.oldUser) {
            this.regFailNameExist();
          } else {
            if (!this.newUser.email) {
              this.regFailEmailEmp();
            } else {
              this.regSuc();
            }
          }
        }
      }
    }
  }

  loadUser() {
    this.storageService.getUsers().then(users => {
      this.users = users;
    });
  }

  async regFailNameEmp() {
    const alert = await this.alertCtrl.create({
      header: 'Register Invalid!',
      subHeader: 'Username cannot be empty',
      buttons: ['OK']
    });
    await alert.present();
  }

  async regFailConEmp() {
    const alert = await this.alertCtrl.create({
      header: 'Register Invalid!',
      subHeader: 'Please confirm username',
      buttons: ['OK']
    });
    await alert.present();
  }

  async regFailNameNotEq() {
    const alert = await this.alertCtrl.create({
      header: 'Register Invalid!',
      subHeader: 'Username is not the same',
      buttons: ['OK']
    });
    await alert.present();
  }

  async regFailNameExist() {
    this.storageService.getUsers().then(async data => {
      this.oldUser = data.find(x => x.username === this.newUser.username).username;
      if (this.newUser.username === this.oldUser) {
        const alert = await this.alertCtrl.create({
          header: 'Register Invalid!',
          subHeader: 'Username already exist',
          buttons: ['OK']
        });
        await alert.present();
      }
    });
  }

  async regFailEmailEmp() {
    const alert = await this.alertCtrl.create({
      header: 'Register Invalid!',
      subHeader: 'Email cannot be empty',
      buttons: ['OK']
    });
    await alert.present();
  }

  async regSuc() {
    const alert = await this.alertCtrl.create({
      header: 'Register Successful!',
      subHeader: 'Please login!',
      buttons: ['OK']
    });
    await alert.present();
    this.storageService.addUser(this.newUser).then(() => {
      this.newUser = <User>{};
      this.navCtrl.navigateRoot('login');
      this.loadUser();
    });
  }
}
