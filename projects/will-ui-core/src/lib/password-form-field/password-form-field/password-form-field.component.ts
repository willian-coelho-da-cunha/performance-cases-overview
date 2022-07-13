import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'will-password-form-field',
  templateUrl: './password-form-field.component.html',
  styleUrls: ['./password-form-field.component.scss'],
  host: {
    'class': 'will-ui-core'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PasswordFormFieldComponent implements OnInit, OnDestroy {

  private readonly end: Subject<void> = new Subject<void>();

  formControl = new FormControl('', [ Validators.required, Validators.minLength(6), Validators.maxLength(12) ]);

  @Output() private changePassword: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    this.observeFormControlValueChanges();
  }

  ngOnDestroy(): void {
    this.end.next();
    this.end.complete();
  }

  private observeFormControlValueChanges(): void {
    this.formControl.valueChanges
      .pipe(takeUntil(this.end))
      .subscribe({
        next: (password: string): void => {
          this.changePassword.emit(password);
        }
      })
    ;
  }
}
