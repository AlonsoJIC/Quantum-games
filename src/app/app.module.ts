import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '@interceptors/token.interceptor';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './modules/home/home/home.component';
import { CatComponent } from './components/animations/cat/cat.component';
import { TitleComponent } from './components/animations/title/title.component';
import { SubtitleComponent } from './components/animations/subtitle/subtitle.component';
import { ScrollDownArrowComponent } from './components/animations/scroll-down-arrow/scroll-down-arrow.component';
import { ButtonComponent } from './components/button/button.component';
import { DownloadsComponent } from './modules/home/downloads/downloads.component';
import { RankingsComponent } from './modules/home/rankings/rankings.component';
import { DonationsComponent } from './modules/home/donations/donations.component';
import { InformationComponent } from './modules/home/information/information.component';
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
