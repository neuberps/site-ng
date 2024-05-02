import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payment } from '../model/payment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesPayment {

  private baseUrl = 'http://localhost:9002/api/payments';

  constructor(private http: HttpClient) { }

  getPayment():Observable<Payment[]>{
    return this.http.get<Payment[]>(this.baseUrl);
  }
}
