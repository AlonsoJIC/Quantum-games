import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from '@shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';


@NgModule({
  declarations: [
  
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,

    FontAwesomeModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }

