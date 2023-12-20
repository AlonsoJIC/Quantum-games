import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home/home.component';
import { DownloadsComponent } from './modules/home/downloads/downloads.component';
import { RankingsComponent } from './modules/home/rankings/rankings.component';
import { DonationsComponent } from './modules/home/donations/donations.component';
import { InformationComponent } from './modules/home/information/information.component';

import { AuthGuard } from '@guards/auth.guard';
import { RedirectGuard } from '@guards/redirect.guard';


const routes: Routes = [
  {
    path: '',
    canActivate: [ RedirectGuard ],
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'information',
    component: InformationComponent
  },
  {
    path: 'downloads',
    component: DownloadsComponent
  },
  {
    path: 'rankings',
    component: RankingsComponent
  },
  {
    path: 'donations',
    component: DonationsComponent
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
/*
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  //RENDERIZA LA PAGE NOTFOUND.... SIEMPRE VA DE ULTIMO PORQUE INTERFIERE!....
  {
    path: '**',
    component: NotFoundComponent
  }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
