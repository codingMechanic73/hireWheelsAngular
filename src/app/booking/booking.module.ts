import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookVehicleComponent } from './book-vehicle/book-vehicle.component';
import { BookingRoutingModule } from './booking-routing.module';



@NgModule({
  declarations: [BookVehicleComponent],
  imports: [
    CommonModule,
    BookingRoutingModule
  ],
  exports: [BookVehicleComponent, BookingRoutingModule]
})
export class BookingModule { }
