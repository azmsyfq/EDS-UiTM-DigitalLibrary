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
  // picToView = '/assets/imgs/icon.png';
  // picToViewClick = '/assets/imgs/icon.1.png';

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


  // CREATE
  async addUser() {
    this.newUser.modified = Date.now();
    this.newUser.id = Date.now();

    if (!this.newUser.username) {
      const alert = await this.alertCtrl.create({
        header: 'Register Invalid!',
        subHeader: 'Username cannot be empty',
        buttons: ['OK']
      });
      await alert.present();
    } else {
      if (!this.newUser.confirm) {
        const alert = await this.alertCtrl.create({
          header: 'Register Invalid!',
          subHeader: 'Please re-enter username',
          buttons: ['OK']
        });
        await alert.present();
      } else {
        if (this.newUser.username !== this.newUser.confirm) {
          const alert = await this.alertCtrl.create({
            header: 'Register Invalid!',
            subHeader: 'Username does not match',
            buttons: ['OK']
          });
          await alert.present();
        } else {
          if (!this.newUser.email) {
            const alert = await this.alertCtrl.create({
              header: 'Register Invalid!',
              subHeader: 'Email cannot be empty',
              buttons: ['OK']
            });
            await alert.present();
          } else {
            const alert = await this.alertCtrl.create({
              header: 'Register Successful!',
              subHeader: 'Please login!',
              buttons: ['OK']
            });
            await alert.present();
            this.storageService.addUser(this.newUser).then(() => {
              this.newUser = <User>{};
              this.navCtrl.navigateRoot('login');
              this.loadUser(); // Or add it to the array directly
            });
          }
        }
      }
    }
  }

  // READ
  loadUser() {
    this.storageService.getUsers().then(users => {
      this.users = users;
    });
  }

}
