import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PasswordFormFieldComponent } from './password-form-field/password-form-field.component';

@NgModule({
  declarations: [
    PasswordFormFieldComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    PasswordFormFieldComponent
  ]
})
export class PasswordFormFieldModule { }
