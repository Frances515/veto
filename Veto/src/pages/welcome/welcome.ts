import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireStorage } from 'angularfire2/storage';
import firebase from 'firebase';



/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(private afs: AngularFireStorage, public navCtrl: NavController, public navParams: NavParams) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad WelcomePage');
  // }

  openCandidate(): void {
    this.navCtrl.push('CandidatePage');
  }

  openVote(): void {
  	this.navCtrl.push('VotePage');
  }

  openStatistics(): void {
  	this.navCtrl.push('StatisticsPage');
  }

  openGeneral(): void {
  	this.navCtrl.push('GeneralPage');
  }

  logout(): void{
    this.navCtrl.push('HomePage');
  }

}
