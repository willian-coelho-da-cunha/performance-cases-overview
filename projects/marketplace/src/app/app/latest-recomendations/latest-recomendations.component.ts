import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, take, takeUntil } from 'rxjs';

import { FinancialStatusInterface } from '../interfaces/financial-status.interface';

import { AppService } from '../app.service';

@Component({
  selector: 'will-latest-recomendations',
  templateUrl: './latest-recomendations.component.html',
  styleUrls: ['./latest-recomendations.component.scss']
})
export class LatestRecomendationsComponent implements OnInit, OnDestroy {
  
  private readonly end: Subject<void> = new Subject<void>();

  financialStatus: FinancialStatusInterface = {
    available_balance: 0,
    debit_balance: 0
  };

  latestRecomendations = [1, 2];

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
