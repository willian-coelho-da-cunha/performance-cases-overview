import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, take, takeUntil } from 'rxjs';

import { FinancialStatusInterface } from '../interfaces/financial-status.interface';

import { AppService } from '../app.service';

@Component({
  selector: 'will-financial-status',
  templateUrl: './financial-status.component.html',
  styleUrls: ['./financial-status.component.scss']
})
export class FinancialStatusComponent implements OnInit, OnDestroy {

  private readonly end: Subject<void> = new Subject<void>();

  latestOrders = [1, 2];

  financialStatus: FinancialStatusInterface = {
    available_balance: 0,
    debit_balance: 0
  };

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.getFinancialStatus();
  }

  ngOnDestroy(): void {
    this.end.next();
    this.end.complete();
  }

  private getFinancialStatus(): void {
    this.appService.getFinancialStatus()
      .pipe(take(1), takeUntil(this.end))
      .subscribe({
        next: (response: FinancialStatusInterface): void => {
          this.financialStatus = response;
        }
      })
    ;
  }
}
