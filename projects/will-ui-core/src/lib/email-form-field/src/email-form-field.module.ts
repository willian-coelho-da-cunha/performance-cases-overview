import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EmailFormFieldComponent } from './email-form-field/email-form-field.component';

@NgModule({
  declarations: [
    EmailFormFieldComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    EmailFormFieldComponent
  ]
})
export class EmailFormFieldModule { }
