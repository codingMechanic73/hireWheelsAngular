import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { MainContentComponent } from './main-content/main-content.component';
import { HomeRoutingModule } from './home-routing.module';
import { BookingModule } from '../booking/booking.module';
import { UserModule } from '../user/user.module';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [HomeComponent, MainContentComponent],
  imports: [
    CommonModule,
    SharedModule,
    BookingModule,
    UserModule,

    HomeRoutingModule,
  ], exports: [
    HomeComponent,
    HomeRoutingModule,
    MainContentComponent
  ]
})
export class HomeModule { }
