import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Car } from '../_models/car';

@Injectable({
  providedIn: 'root'
})
export class CarserviceService {

  constructor(private _http: HttpClient) { }

  public getCars(){
    return this._http.get<any>('assets/cars.json')
    .toPromise()
    .then(res => <Car[]>res.data)
    .then(data => {return data;});
  }
}
