import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { DownloadsComponent } from './modules/home/pages/downloads/downloads.component';
import { RankingsComponent } from './modules/home/pages/rankings/rankings.component';
import { DonationsComponent } from './modules/home/pages/donations/donations.component';
import { InformationComponent } from './modules/home/pages/information/information.component';
import { NotFoundComponent } from './modules/home/pages/not-found/not-found.component';


import { AuthGuard } from '@guards/auth.guard';
import { RedirectGuard } from '@guards/redirect.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    canActivate: [ RedirectGuard ],
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'profile',
    canActivate: [ AuthGuard ],
    loadChildren: () => import('./modules/profile/profile.module').then((m) => m.ProfileModule),
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
    path: 'not-found',
    component: NotFoundComponent
  },
  //RENDERIZA LA PAGE NOTFOUND.... SIEMPRE VA DE ULTIMO PORQUE INTERFIERE!....
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
