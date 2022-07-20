import { SpectatorHost, createHostFactory } from '@ngneat/spectator';

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
});
