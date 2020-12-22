import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookVehicleComponent } from './book-vehicle/book-vehicle.component';


const routes: Routes = [{path: 'booking', component: BookVehicleComponent}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class BookingRoutingModule { }
