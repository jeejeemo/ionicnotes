
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { ApiProvider } from '../providers/api/api';
import { UserProvider } from '../providers/user/user';
import { NoteProvider } from '../providers/note/note';
import { LoginPageModule } from '../pages/auth/login/login.module';
import { HomeTabsPageModule } from '../pages/tabs/home-tabs/home-tabs/home-tabs.module';


@NgModule({
  declarations: [
    MyApp,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule,
    HomeTabsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    UserProvider,
    NoteProvider
  ]
})
export class AppModule {}
