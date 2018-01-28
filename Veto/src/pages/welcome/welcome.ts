import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  candidate_Page(): void {
    this.navCtrl.push('CandidatePage');
  }

  vote_Page(): void {
  	this.navCtrl.push('VotePage');
  }

  statistics_Page(): void {
  	this.navCtrl.push('StatisticsPage');
  }

  general_Page(): void {
  	this.navCtrl.push('GeneralPage');
  }

}
