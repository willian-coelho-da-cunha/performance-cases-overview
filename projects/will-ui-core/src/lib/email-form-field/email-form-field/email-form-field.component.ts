import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

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

  formControl = new FormControl('', [ Validators.required, Validators.email ]);

  @Output() private changeEmail: EventEmitter<{ email: string; invalid: boolean }> = new EventEmitter<{ email: string; invalid: boolean }>();

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
