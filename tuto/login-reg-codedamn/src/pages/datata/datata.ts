import { DatataPageModule } from './datata.module';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DatataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-datata',
  templateUrl: 'datata.html'
})
 export class DatataPage {

  user: string;
  name: string;
  email: string;

  people: any[] = [
    {
      "user": "asd", "email": "asdasd@gmail"
    }
  ];
}