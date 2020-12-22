import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [AddVehicleComponent, AdminDashboardComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ], exports: [UserRoutingModule, AdminDashboardComponent, AddVehicleComponent]
})
export class UserModule { }
