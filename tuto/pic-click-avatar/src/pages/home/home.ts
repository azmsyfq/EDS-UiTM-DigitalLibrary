import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  
   picToView:string="/assets/imgs/logo.png";
   picToViewMan:string="/assets/imgs/man.png";
   picToViewWoman:string="/assets/imgs/woman.png";  
   picToViewCat:string="/assets/imgs/cat.png";  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  changeView(){
    this.picToView=this.picToView; 
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

}
