import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CarserviceService } from './services/carservice.service';
import { Car } from './_models/car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ConfirmationService, MessageService, CarserviceService]
})
export class AppComponent implements OnInit{

  public cars: Car[];
  
  constructor(
    private _carService: CarserviceService,
    private _messageService: MessageService,
    private _confirmationService: ConfirmationService
    
    ){
    }
    ngOnInit(){ 
      this._carService.getCars().then(data => this.cars = data);
    }
}
