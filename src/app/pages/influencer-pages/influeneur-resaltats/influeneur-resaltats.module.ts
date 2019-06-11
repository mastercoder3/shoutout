import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InflueneurResaltatsPage } from './influeneur-resaltats.page';

const routes: Routes = [
  {
    path: '',
    component: InflueneurResaltatsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InflueneurResaltatsPage]
})
export class InflueneurResaltatsPageModule {}
