import { SpectatorHost, createHostFactory } from '@ngneat/spectator';

import { ButtonDefaultComponent } from './button-default.component';

const USE_CASES = {
  basic: `<will-button-default><will-button-default>`
};

describe('ButtonDefaultComponent', () => {

  let subject: SpectatorHost<ButtonDefaultComponent>;

  const createHost = createHostFactory({
    component: ButtonDefaultComponent,
    declarations: [
      ButtonDefaultComponent
    ],
    declareComponent: false
  })

  it('should create an instance.', () => {
    subject = createHost(USE_CASES.basic);
    expect(subject.component).toBeTruthy();
  });
});
