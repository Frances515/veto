import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AngularFireDatabase} from 'angularfire2/database';



/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
}) 
export class RegisterPage {

  dataArr = []
  em
  myDate
  major
  gender

  @ViewChild('email') user;
  @ViewChild('password') password;
  @ViewChild('pass2') pass2;
  @ViewChild('yog') year;
  @ViewChild('gen') gend;
  @ViewChild('maj') course;

  constructor(public loadingCtrl: LoadingController, public toastCtrl: ToastController, private fire: AngularFireAuth, private base: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    this.base.list("/RegisterdPersons/")


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }


  presentToast(){
    let toast = this.toastCtrl.create({
      message: 'Registration successful',
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
      this.navCtrl.push('LoginPage');
    }, 1000);

    setTimeout(() => {
      loading.dismiss();
    }, 1000);
  }

   errorToast(string){
    let toast = this.toastCtrl.create({
      message: 'There was an error in registering. Please try again' + ' ' + string,
      duration: 3000
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



  addUser(){
    let info = {
      email: this.em,
      grad: this.myDate,
      sex: this.gender,
      course: this.major
    }
    this.base.list("/RegisteredPersons/").push(info);
  }




  passwordCheck(passA, passB){
     let success: boolean = false;
    if(!this.pass2){
      success = true;
       let toast = this.toastCtrl.create({
      message: 'Please confirm your password',
      duration: 3000
    });
    toast.present();
    return success;
    }
  }


  dateCheck(){
    if(!this.myDate){
      let toast = this.toastCtrl.create({
      message: 'Please type in your graduation year',
      duration: 3000
    });
    toast.present();
    }
  }

  genderCheck(){
    if(!this.gender){
      let toast = this.toastCtrl.create({
      message: 'Please select your gender',
      duration: 3000
    });
    toast.present();
    }
  }

  majorCheck(){
    if(!this.major){
       let toast = this.toastCtrl.create({
      message: 'Please type in your major',
      duration: 3000
    });
    toast.present();
    }
  }

  signIn(): void{
    this.navCtrl.push('LoginPage');
  }


  login_page(): void {
    if(this.user.value.includes("@ashesi.edu.gh") && !this.passwordCheck(this.password.value, this.pass2.value) && !this.dateCheck() && !this.majorCheck() && !this.genderCheck()){
      this.fire.auth.createUserWithEmailAndPassword(this.user.value, this.password.value)
    .then(data => {
      this.presentLoadingText();
      this.presentToast();
      this.addUser();
    })
    }
    else if(!this.user.value.includes("@ashesi.edu.gh")){
      this.errorToast('Register with your Ashesi University email address, please.');
      this.errorLoadingText();
    }

    
  }



  



}
