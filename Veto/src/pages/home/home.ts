import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  loginPage(): void {
    this.navCtrl.push('LoginPage');
  }

  registerPage(): void{
    this.navCtrl.push('RegisterPage');
  }

}
 