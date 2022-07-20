import { createHostFactory, Spectator } from '@ngneat/spectator';
import { axe } from 'jest-axe';

import { EmailFormFieldModule } from '../email-form-field.module';

import { EmailFormFieldComponent } from './email-form-field.component';

const USE_CASES = {
  basic: `<will-email-form-field></will-email-form-field>`
};

describe('EmailFormFieldComponent', () => {

  let subject: Spectator<EmailFormFieldComponent>;

  const createHost = createHostFactory({
    component: EmailFormFieldComponent,
    declareComponent: false,
    imports: [
      EmailFormFieldModule
    ]
  });

  it('should create an instance.', () => {
    subject = createHost(USE_CASES.basic);
    expect(subject.component).toBeTruthy();
  });

  it('should not have generic accessibilities problems.', async () => {
    subject = createHost(USE_CASES.basic);
    expect(await axe(subject.fixture.nativeElement)).toHaveNoViolations();
  });
});
