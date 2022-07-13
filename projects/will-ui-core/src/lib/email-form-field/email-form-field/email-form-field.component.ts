import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'will-email-form-field',
  templateUrl: './email-form-field.component.html',
  styleUrls: ['./email-form-field.component.scss'],
  host: {
    'class': 'will-ui-core'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmailFormFieldComponent {

  formControl = new FormControl('', [ Validators.required, Validators.email ]);
}
