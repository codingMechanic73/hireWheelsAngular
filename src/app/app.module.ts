import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { HomeComponent } from './home/home/home.component';
import { MainContentComponent } from './home/main-content/main-content.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeModule } from './home/home.module';
import { BookingRoutingModule } from './booking/booking-routing.module';
import { CoreRoutingModule } from './core/core-routing.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { UserRoutingModule } from './user/user-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
