import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { vehicleDetails } from '../model/vehicleDetails';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  details: vehicleDetails[] = [];
  url: string = 'http://localhost:8012/vehicles'


  constructor(private httpClient: HttpClient) { }

  addVehicle(form) {
    this.details.push(form);
    return this.httpClient.post(this.url, form).pipe(catchError(this.errorHandler));;
  }

  getAvailableVehicles(userId): Observable<vehicleDetails[]> {
    return this.httpClient.get<vehicleDetails[]>('http://localhost:8012/users/{userId}/vehicles'.replace('{userId}', userId)).pipe(catchError(this.errorHandler));;
  }

  private errorHandler(errorRes: HttpErrorResponse) {

    console.log('error', errorRes);
    return throwError(errorRes.error);
  }
}


