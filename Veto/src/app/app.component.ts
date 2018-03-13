import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CandidatePage } from '../pages/candidate/candidate';
import { GeneralPage } from '../pages/general/general';
import { StatisticsPage } from '../pages/statistics/statistics';
import { VotePage } from '../pages/vote/vote';
import { HomePage } from '../pages/home/home';
 

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  @ViewChild(Nav) nav:Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openCandidatePage(page){
    this.nav.setRoot(CandidatePage); 
  }

  openGeneralPage(page){
    this.nav.setRoot(GeneralPage);
  }

  openStatisticsPage(page){
    this.nav.setRoot(StatisticsPage);
  }
  openVotePage(page){
    this.nav.setRoot(VotePage);
  }
  openHomePage(page){
    this.nav.setRoot(HomePage);
  }

}

