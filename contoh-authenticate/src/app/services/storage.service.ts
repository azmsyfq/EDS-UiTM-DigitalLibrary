import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface User {
  id: number;
  username: string;
  confirm: string;
  email: string;
  modified: number;
  myimage: string;
  ava: string;
}

const ITEMS_KEY = 'users-list';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private destn: any;
  constructor(private storage: Storage) { }


  public setDestn(destn) {
    this.destn = destn;
  }

  getDestn() {
    return this.destn;
  }

  // CREATE
  addUser(user: User): Promise<any> {
    return this.storage.get(ITEMS_KEY).then((users: User[]) => {
      if (users) {
        users.push(user);
        return this.storage.set(ITEMS_KEY, users);
      } else {
        return this.storage.set(ITEMS_KEY, [user]);
      }
    });
  }

  // READ
  getUsers(): Promise<User[]> {
    return this.storage.get(ITEMS_KEY);
  }

  // UPDATE
  updateUser(user: User): Promise<any> {
    return this.storage.get(ITEMS_KEY).then((users: User[]) => {
      if (!users || users.length === 0) {
        return null;
      }

      const newUsers: User[] = [];

      for (const i of users) {
        if (i.id === user.id) {
          newUsers.push(user);
        } else {
          newUsers.push(i);
        }
      }

      return this.storage.set(ITEMS_KEY, newUsers);
    });
  }

  // DELETE
  deleteUser(id: number): Promise<User> {
    return this.storage.get(ITEMS_KEY).then((users: User[]) => {
      if (!users || users.length === 0) {
        return null;
      }

      const toKeep: User[] = [];

      for (const i of users) {
        if (i.id !== id) {
          toKeep.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY, toKeep);
    });
  }
}
