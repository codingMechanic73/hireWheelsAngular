import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VehicleService } from './vehicle.service';




@NgModule({
  declarations: [AddVehicleComponent, AdminDashboardComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ], exports: [UserRoutingModule, AdminDashboardComponent, AddVehicleComponent],
  providers:[VehicleService]
})
export class UserModule { }
