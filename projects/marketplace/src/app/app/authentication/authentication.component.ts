import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

import { AppService } from '../app.service';

@Component({
  selector: 'will-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnDestroy {

  private readonly end: Subject<void> = new Subject<void>();

  private email: string = '';

  private password: string = '';

  isAuthorizing: boolean = false;

  constructor(
    private router: Router,
    private appService: AppService
  ) { }

  ngOnDestroy(): void {
    this.end.next();
    this.end.complete();
  }

  public authorize(): void {
    if (!this.isAuthorizing) {
      this.isAuthorizing = true;
      this.appService.authorize(this.email, this.password)
        .pipe(takeUntil(this.end))
        .subscribe({
          next: (isAuthorized: boolean): void => {
            if (isAuthorized) {
              this.router.navigateByUrl('/home');

            } else {
              ;
            }
          },
          complete: (): void => {
            this.isAuthorizing = false;
          }
        })
      ;
    }
  }

  public changeEmail($event: string): void {
    this.email = $event;
  }

  public changePassword($event: string): void {
    this.password = $event;
  }
}
