import { Component, ChangeDetectorRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	provider = {
	name: '',
	profilePicture: '',
	email: '',
	loggedin: false
}
constructor(private fire: AngularFireAuth,
public navCtrl: NavController,
public ref: ChangeDetectorRef) {
}

loginWithFacebook() {
	this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
	.then( res => {
		console.log('From --Facebook--')
		this.provider.loggedin = true;
		this.provider.name = res.user.displayName;
		this.provider.email = res.user.email;
		console.log(this.provider.email)
		this.provider.profilePicture = res.user.photoURL;
		this.ref.detectChanges();
		console.log(res);
	})
}
	
loginWithGoogle() {
  	this.fire.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  	.then( res => {
		console.log('From --Google--')
		this.provider.loggedin = true;
		this.provider.name = res.user.displayName;
		this.provider.email = res.user.email;
		console.log(this.provider.email)
		this.provider.profilePicture = res.user.photoURL;
		this.ref.detectChanges();
		console.log(res);
  	})
}

logout() {
	this.fire.auth.signOut();
	this.provider.loggedin = false;
	this.ref.detectChanges();
	}
}
