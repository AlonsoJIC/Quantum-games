import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home/home.component';
import { DownloadsComponent } from './modules/home/downloads/downloads.component';
import { RankingsComponent } from './modules/home/rankings/rankings.component';
import { DonationsComponent } from './modules/home/donations/donations.component';
import { InformationComponent } from './modules/home/information/information.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { LoginComponent } from './modules/auth/login/login.component';

const routes: Routes = [
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
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
/*   {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: 'projects/:id',
    component: ProjectDetailComponent
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
