import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/entry-pages/home/home.module#HomePageModule' },
  { path: 'company-front', loadChildren: './pages/company-pages/company-front/company-front.module#CompanyFrontPageModule' },
  { path: 'company-resultats',
    loadChildren: './pages/company-pages/company-resultats/company-resultats.module#CompanyResultatsPageModule' },
  { path: 'generateur-contract', loadChildren: './pages/generateur-contract/generateur-contract.module#GenerateurContractPageModule' },
  { path: 'influencer-connect',
    loadChildren: './pages/influencer-pages/influencer-connect/influencer-connect.module#InfluencerConnectPageModule' },
  { path: 'inf-contract-offer', loadChildren: './pages/influencer-pages/inf-contract-offer/inf-contract-offer.module#InfContractOfferPageModule' },
  { path: 'signup-company', loadChildren: './pages/company-pages/inscription-company/inscription-company.module#InscriptionCompanyPageModule' },
  { path: 'influencer-signup', loadChildren: './pages/influencer-pages/inscription/inscription.module#InscriptionPageModule' },
    { path: 'dashboard', component: DashboardComponent, children: [
      {path: 'influencer', loadChildren: './pages/influencer-pages/influencer/influencer.module#InfluencerPageModule'},
      { path: 'messanger', loadChildren: './pages/messanger/messanger.module#MessangerPageModule' },
      { path: 'company-influenceur', loadChildren: './pages/company-pages/company-influenceur/company-influenceur.module#CompanyInfluenceurPageModule' },
      { path: 'influeneur-resaltats', loadChildren: './pages/influencer-pages/influeneur-resaltats/influeneur-resaltats.module#InflueneurResaltatsPageModule' },
      { path: 'acceuil', loadChildren: './pages/acceuil/acceuil.module#AcceuilPageModule' }  
    ]
    },
  { path: 'login', loadChildren: './pages/entry-pages/login/login.module#LoginPageModule' },
  { path: 'influencer-profile', loadChildren: './pages/influencer-pages/influencer-profile/influencer-profile.module#InfluencerProfilePageModule' },
  { path: 'resultats', loadChildren: './pages/resultats/resultats.module#ResultatsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
