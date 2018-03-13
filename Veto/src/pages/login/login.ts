import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage() 
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('uemail') user;
  @ViewChild('pass1') password;

  userEm
  userPass

  constructor(public loadingCtrl: LoadingController, public toastCtrl: ToastController,private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  presentToast(){
    let toast = this.toastCtrl.create({
      message: 'Log in successful',
      duration: 3000
    });
    toast.present();
  }


  presentLoadingText(){
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Loading...'
    });

    loading.present();

    setTimeout(() => {
      this.navCtrl.push('GeneralPage');
    }, 1000);

    setTimeout(() => {
      loading.dismiss();
    }, 1000);
  }

  errorToast(str){
    let toast = this.toastCtrl.create({
      message: 'An error occurred ' + str + '. Please try again or perharps you may want to register',
      duration: 4000
    });
    toast.present();
  }

    errorLoadingText(){
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Loading...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 100);
  }

  general_news(): void {
     if(this.user.value.includes("@ashesi.edu.gh")){
    this.fire.auth.signInAndRetrieveDataWithEmailAndPassword(this.user.value, this.password.value)
    .then(data =>{
      this.presentToast();
      this.presentLoadingText();
    }) 
    .catch(error => {
      this.errorToast(error);
      this.errorLoadingText();
  });
   }
   
  
    
  }

  registerPage(): void{
    this.navCtrl.push('RegisterPage');
  }

}
