import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { ClientInterface } from './interfaces/client.interface';
import { FinancialStatusInterface } from './interfaces/financial-status.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private httpClient: HttpClient
  ) { }

  authorize(email: string, password: string): Observable<boolean> {
    return this.httpClient
      .get<ClientInterface>(`http://localhost:3000/clients?email=${email}&password=${password}`)
      .pipe(map((response: ClientInterface) => response && typeof response.id === 'number'))
    ;
  }

  getFinancialStatus(): Observable<FinancialStatusInterface> {
    return this.httpClient.get<FinancialStatusInterface>('http://localhost:3000/financial_status');
  }
}
