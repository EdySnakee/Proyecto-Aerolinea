import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RespuestaService } from '../respuesta.service';



@Component({
  selector: 'app-air',
  templateUrl: './air.component.html',
  styleUrls: ['./air.component.css']
})
export class AirComponent {

  passengers: any[] | undefined;



  constructor(private respuestaService: RespuestaService) {
    // Aquí puedes proporcionar los datos de conexión
    const host = 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com';
    const user = 'bsale_test';
    const password = 'bsale_test';
    const database = 'airline';
  }

  ngOnInit() {
    this.getFlightPassengers(4); 
  }

  getFlightPassengers(flightId: number) {
    this.respuestaService.getFlightPassengers(flightId)
      .subscribe({
        next: (response: any) => {
          this.passengers = response.data.passengers;
        },
        error: (error: any) => {
          console.warn(error);
        }
      });
  }

}
