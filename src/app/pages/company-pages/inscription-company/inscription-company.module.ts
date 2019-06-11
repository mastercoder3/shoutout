import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InscriptionCompanyPage } from './inscription-company.page'; 

const routes: Routes = [
  {
    path: '',
    component: InscriptionCompanyPage
  }
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InscriptionCompanyPage]
})
export class InscriptionCompanyPageModule {}
