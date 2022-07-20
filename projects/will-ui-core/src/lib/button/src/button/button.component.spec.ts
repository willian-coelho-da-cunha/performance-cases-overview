import { SpectatorHost, createHostFactory } from '@ngneat/spectator';
import { axe } from 'jest-axe';

import { ButtonModule } from '../button.module';

import { ButtonComponent } from './button.component';

const USE_CASES = {
  basic: `<will-button [label]="'Send'" [ariaLabel]="'Send form data'"></will-button>`
};

describe('ButtonComponent', () => {

  let subject: SpectatorHost<ButtonComponent>;

  const createHost = createHostFactory({
    component: ButtonComponent,
    declareComponent: false,
    imports: [
      ButtonModule
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
