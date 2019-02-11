import { DatataPage } from './../pages/datata/datata';
import { AdminPage } from './../pages/admin/admin';
import { RegisterPage } from './../pages/register/register';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ItemPage } from '../pages/item/item';

import { HttpModule } from '@angular/http';
import { NativeStorage } from '@ionic-native/native-storage';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    ItemPage,
    AdminPage,
    DatataPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    ItemPage,
    AdminPage,
    DatataPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
