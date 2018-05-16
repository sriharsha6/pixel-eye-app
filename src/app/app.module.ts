import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { GetintouchComponent } from './getintouch/getintouch.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { WeareComponent } from './weare/weare.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { WedoComponent } from './wedo/wedo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    GetintouchComponent,
    PortfolioComponent,
    WeareComponent,
    OurteamComponent,
    WedoComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
