import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListeDesNotesPage } from './liste-des-notes';

@NgModule({
  declarations: [
    ListeDesNotesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListeDesNotesPage),
  ],
})
export class ListeDesNotesPageModule {}
