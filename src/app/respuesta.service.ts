import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timer, throwError } from 'rxjs';
import { switchMap, retryWhen, delayWhen } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RespuestaService {
  private host = 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com';
  private retryDelay = 5000; // Tiempo de espera

  constructor(private http: HttpClient) { }

  getFlightPassengers(flightId: number) {
    const url = `http://${this.host}/flights/${flightId}/passengers`;
    return this.http.get(url).pipe(
      retryWhen(errors => {
        return errors.pipe(
          delayWhen(() => timer(this.retryDelay)),
          switchMap(() => throwError('Error de conexión. Intentando reconexión...'))
        );
      })
    );
  }
}

