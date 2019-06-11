import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InfluencerConnectPage } from './influencer-connect.page';

const routes: Routes = [
  {
    path: '',
    component: InfluencerConnectPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InfluencerConnectPage]
})
export class InfluencerConnectPageModule {}
