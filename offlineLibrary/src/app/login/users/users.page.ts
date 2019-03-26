import { Component, ViewChild } from '@angular/core';
import { StorageService, User } from '../../services/storage.service';
import { Platform, ToastController, IonList, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage {

  users: User[] = [];
  newUser: User = <User>{};

  @ViewChild('mylist') mylist: IonList;
  constructor(
    private storageService: StorageService,
    private plt: Platform,
    private toastController: ToastController,
    public alertCtrl: AlertController
  ) {
    this.plt.ready().then(() => {
      this.loadUsers();
    });
  }

  loadUsers() {
    this.storageService.getUsers().then(data => {
      this.users = data;
    });
  }

  updateUser(user: User) {
    user.username = `EXPIRED: ${user.username}`;
    user.modified = Date.now();

    this.storageService.updateUser(user).then(() => {
      this.showToast('User expired!');
      this.mylist.closeSlidingItems();
      this.loadUsers();
    });
  }

  deleteUser(user: User) {
    this.storageService.deleteUser(user.id).then(() => {
      this.showToast('User removed!');
      this.mylist.closeSlidingItems();
      this.loadUsers();
    });
  }

  async showToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
