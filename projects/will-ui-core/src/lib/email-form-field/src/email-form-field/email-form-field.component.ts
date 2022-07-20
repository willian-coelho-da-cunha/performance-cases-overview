import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

import { UtilService } from '@will/ui-core/src/lib/common';

@Component({
  selector: 'will-email-form-field',
  templateUrl: './email-form-field.component.html',
  styleUrls: ['./email-form-field.component.scss'],
  host: {
    'class': 'will-ui-core'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmailFormFieldComponent implements OnInit, OnDestroy {

  private readonly end: Subject<void> = new Subject<void>();

  readonly id: string = '';

  formControl = new FormControl('', [ Validators.required, Validators.email ]);

  @Input() label: string = 'E-mail';

  @Output() private changeEmail: EventEmitter<{ email: string; invalid: boolean }> = new EventEmitter<{ email: string; invalid: boolean }>();

  constructor(
    private utilService: UtilService
    ) {
    this.id = 'will-email-form-field__input--' + this.utilService.getID();
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
        next: (email: string): void => {
          this.changeEmail.emit({ email: email, invalid: this.formControl.invalid });
        }
      })
    ;
  }
}
