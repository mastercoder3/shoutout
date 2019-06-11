import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CompanyInfluenceurPage } from './company-influenceur.page';

const routes: Routes = [
  {
    path: '',
    component: CompanyInfluenceurPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CompanyInfluenceurPage]
})
export class CompanyInfluenceurPageModule {}
