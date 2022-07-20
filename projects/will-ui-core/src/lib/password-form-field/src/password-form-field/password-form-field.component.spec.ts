import { createHostFactory, Spectator } from '@ngneat/spectator';

import { PasswordFormFieldModule } from '../password-form-field.module';

import { PasswordFormFieldComponent } from './password-form-field.component';

const USE_CASES = {
  basic: `<will-password-form-field></will-password-form-field>`
};

describe('PasswordFormFieldComponent', () => {

  let subject: Spectator<PasswordFormFieldComponent>;

  const createHost = createHostFactory({
    component: PasswordFormFieldComponent,
    declareComponent: false,
    imports: [
      PasswordFormFieldModule
    ]
  });
  
  it('should create an instance.', () => {
    subject = createHost(USE_CASES.basic);
    expect(subject.component).toBeTruthy();
  });
});
