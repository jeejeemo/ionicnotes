import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the AuthTabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-auth-tabs',
  templateUrl: 'auth-tabs.html'
})
export class AuthTabsPage {

  connexionRoot = 'ConnexionPage'
  inscriptionRoot = 'InscriptionPage'


  constructor(public navCtrl: NavController) {}

}
