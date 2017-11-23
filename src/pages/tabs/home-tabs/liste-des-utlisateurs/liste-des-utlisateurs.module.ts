import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListeDesUtlisateursPage } from './liste-des-utlisateurs';

@NgModule({
  declarations: [
    ListeDesUtlisateursPage,
  ],
  imports: [
    IonicPageModule.forChild(ListeDesUtlisateursPage),
  ],
})
export class ListeDesUtlisateursPageModule {}
