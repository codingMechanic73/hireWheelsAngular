import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { vehicleDetails } from 'src/app/model/vehicleDetails';
import { AuthService } from 'src/app/shared/auth.service';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  message: string; 
  errorCode: number = 0;
  isLoading: boolean = true;
  vehicleList: vehicleDetails[];
  constructor(private vehicleService: VehicleService, private authService: AuthService) { }
  fuelTypes = [{ name: 'Petrol', value: 1 }, { name: 'Diesel', value: 2 }];

  categories = [{
    name: 'CAR', value: 1, subCategories: [{ name: 'SUV', value: 1 }, { name: 'SEDAN', value: 2 }, { name: 'HATCHBACK', value: 3 }]
  }, {
    name: 'BIKE', value: 2, subCategories: [{ name: 'CRUISER', value: 4 }, { name: 'DIRT BIKE', value: 5 }, { name: 'SPORTS BIKE', value: 6 }]
  }];

  vehicleLocations = [
    { name: 'Worli', value: 1 },
    { name: 'Chembur', value: 2 },
    { name: "Powai", value: 3 }];

  ngOnInit(): void {
    this.vehicleService.getAvailableVehicles(this.authService.getUser().userId).subscribe(v => {
      this.vehicleList = v;
      this.isLoading = false;
      console.log(this.vehicleList);
    }, error => {
      console.log(error);
      this.isLoading = false;
      this.errorCode = 1;
      this.message = error
    })
  }

  getSubcategory(id) {
    let subcategoryName = '';
    this.categories.forEach(category => {
      category.subCategories.forEach(subcategory => {
        console.log(subcategory.value, +id)
        if (subcategory.value === +id) {
          subcategoryName = subcategory.name;
        }
      })
    })
    console.log(subcategoryName);
    return subcategoryName;
  }

  getFuel(id) {
    return this.fuelTypes[id - 1].name;
  }

}
