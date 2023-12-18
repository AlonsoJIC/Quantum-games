import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { RegisterComponent } from './modules/auth/register/register.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { ForgotPasswordComponent } from './modules/auth/forgot-password/forgot-password.component';
import { RecoveryComponent } from './modules/auth/recovery/recovery.component';

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
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    RecoveryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
