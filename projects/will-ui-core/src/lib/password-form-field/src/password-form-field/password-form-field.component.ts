import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

import { UtilService } from '@will/ui-core/src/lib/common';

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

  readonly id: string = '';

  formControl = new FormControl('', [ Validators.required, Validators.minLength(6), Validators.maxLength(12) ]);

  @Input() label: string = 'Senha';

  @Output() private changePassword: EventEmitter<{ password: string; invalid: boolean; }> = new EventEmitter<{ password: string; invalid: boolean; }>();

  constructor(
    private utilService: UtilService
    ) {
    this.id = 'will-password-form-field__input--' + this.utilService.getID();
  }

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
          this.changePassword.emit({ password: password, invalid: this.formControl.invalid });
        }
      })
    ;
  }
}
