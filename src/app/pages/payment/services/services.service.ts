import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payment } from '../model/payment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private baseUrl = 'http://localhost:9001/api/payments';

  constructor(private http: HttpClient) { }

  createPayment(payment: Payment): Observable<object> {
    return this.http.post(`${this.baseUrl}`, payment);
  }
}
