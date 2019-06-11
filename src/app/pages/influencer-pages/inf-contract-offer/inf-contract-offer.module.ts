import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InfContractOfferPage } from './inf-contract-offer.page';

const routes: Routes = [
  {
    path: '',
    component: InfContractOfferPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InfContractOfferPage]
})
export class InfContractOfferPageModule {}
