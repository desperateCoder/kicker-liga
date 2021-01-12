import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OccupySliderComponent } from './components/occupy-slider/occupy-slider.component';
import { HttpClientModule } from '@angular/common/http';
import { RankingTableComponent } from './components/ranking-table/ranking-table.component';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    OccupySliderComponent,
    RankingTableComponent,
    StartPageComponent,
    LoginPageComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
