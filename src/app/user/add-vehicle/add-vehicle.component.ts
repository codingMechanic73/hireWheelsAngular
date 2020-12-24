import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.scss']
})
export class AddVehicleComponent implements OnInit {
  vehicleForm: FormGroup;
  subcategoryIndex: number = 1;
  message: string;
  accountSuccess = 0;

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

  constructor(private authService: AuthService, private vehicleService: VehicleService, private _location: Location, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.vehicleForm = this.formBuilder.group({
      vehicleModel: ['', Validators.required],
      vehicleNumber: ['', Validators.required],
      vehicleCategoryId: ['', Validators.required],
      fuelTypeId: ['', Validators.required],
      vehicleSubCategoryId: ['', Validators.required],
      color: ['', Validators.required],
      locationId: ['', Validators.required],
      carImageUrl: ['', Validators.required],
    });
    this.listenToFormChanges();
  }

  listenToFormChanges() {
    this.vehicleForm.get('vehicleCategoryId').valueChanges.subscribe(category => {
      this.subcategoryIndex = +category;
      console.log(category);
    })
  }

  goBack() {
    this._location.back();
  }

  addVehicle(form: FormGroup) {
    form.value.userId = this.authService.getUser().userId;
    form.value.userComments = '';
    console.log(form.value);

    this.vehicleService.addVehicle(form.value).subscribe(result => {
      console.log(result['message']);
      this.accountSuccess = 1;
      this.message = result['message'];
    }, error => {
      this.accountSuccess = -1;
      this.message = error['message'];
      console.log(error['message']);

    })
  }

}
