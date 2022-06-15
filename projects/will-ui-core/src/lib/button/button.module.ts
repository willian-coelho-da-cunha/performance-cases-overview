import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './button/button.component';
import { ButtonSubmitComponent } from './button-submit/button-submit.component';
import { ButtonDefaultComponent } from './button-default/button-default.component';

@NgModule({
  declarations: [
    ButtonComponent,
    ButtonSubmitComponent,
    ButtonDefaultComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent
  ]
})
export class ButtonModule { }
