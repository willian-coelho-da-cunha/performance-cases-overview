import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { FinancialStatusInterface } from './interfaces/financial-status.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getFinancialStatus(): Observable<FinancialStatusInterface> {
    return this.httpClient.get<FinancialStatusInterface>('http://localhost:3000/financial_status');
  }
}
