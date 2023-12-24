import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '@interceptors/token.interceptor';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { CatComponent } from './components/animations/cat/cat.component';
import { TitleComponent } from './components/animations/title/title.component';
import { SubtitleComponent } from './components/animations/subtitle/subtitle.component';
import { ScrollDownArrowComponent } from './components/animations/scroll-down-arrow/scroll-down-arrow.component';
import { ButtonComponent } from './components/button/button.component';
import { DownloadsComponent } from './modules/home/pages/downloads/downloads.component';
import { RankingsComponent } from './modules/home/pages/rankings/rankings.component';
import { DonationsComponent } from './modules/home/pages/donations/donations.component';
import { InformationComponent } from './modules/home/pages/information/information.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CatComponent,
    TitleComponent,
    SubtitleComponent,
    ScrollDownArrowComponent,
    ButtonComponent,
    DownloadsComponent,
    RankingsComponent,
    DonationsComponent,
    InformationComponent,
    RegisterFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
