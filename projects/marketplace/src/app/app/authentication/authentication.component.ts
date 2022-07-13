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

  private email: { email: string; invalid: boolean } = { email: '', invalid: true };

  private password: { password: string; invalid: boolean; } = { password: '', invalid: true };

  isAuthorizing: boolean = false;

  emailInvalid: boolean = true;

  passwordInvalid: boolean = true;

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
      this.appService.authorize(this.email.email, this.password.password)
        .pipe(takeUntil(this.end))
        .subscribe({
          next: (isAuthorized: boolean): void => {
            if (isAuthorized) {
              this.router.navigateByUrl('/home');
            }
            this.isAuthorizing = false;
          },
          error: (): void => {
            this.isAuthorizing = false;
          }
        })
      ;
    }
  }

  public changeEmail($event: { email: string; invalid: boolean; }): void {
    this.email = $event;
    this.emailInvalid = $event.invalid;
  }

  public changePassword($event: { password: string; invalid: boolean }): void {
    this.password = $event;
    this.passwordInvalid = $event.invalid;
  }
}
