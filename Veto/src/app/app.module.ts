import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CandidatePage } from '../pages/candidate/candidate';
import { GeneralPage } from '../pages/general/general';
import { StatisticsPage } from '../pages/statistics/statistics';
import { VotePage } from '../pages/vote/vote';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth'
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
// import { storage, initializeApp } from 'firebase';


// import { ScreenOrientation } from '@ionic-native/screen-orientation';


 const firebaseAuth = {
    apiKey: "AIzaSyCUTErXv5kmYJutGT9m03W8J9FI-54MydI",
    authDomain: "finals-a7881.firebaseapp.com",
    databaseURL: "https://finals-a7881.firebaseio.com",
    projectId: "finals-a7881",
    storageBucket: "finals-a7881.appspot.com",
    messagingSenderId: "424031413594"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CandidatePage,
    StatisticsPage,
    VotePage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CandidatePage,
    StatisticsPage,
    VotePage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  
})
export class AppModule {}
