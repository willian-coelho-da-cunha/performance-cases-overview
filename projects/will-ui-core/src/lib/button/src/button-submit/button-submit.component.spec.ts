import { SpectatorHost, createHostFactory } from '@ngneat/spectator';
import { axe } from 'jest-axe';

import { ButtonSubmitComponent } from './button-submit.component';

const USE_CASES = {
  basic: `<will-button-submit><will-button-submit>`
};

describe('ButtonSubmitComponent', () => {

  let subject: SpectatorHost<ButtonSubmitComponent>;

  const createHost = createHostFactory({
    component: ButtonSubmitComponent,
    declarations: [
      ButtonSubmitComponent
    ],
    declareComponent: false
  })

  it('should create an instance.', () => {
    subject = createHost(USE_CASES.basic);
    expect(subject.component).toBeTruthy();
  });

  it('should not have generic accessibilities problems.', async () => {
    subject = createHost(USE_CASES.basic);
    expect(await axe(subject.fixture.nativeElement)).toHaveNoViolations();
  });
});
