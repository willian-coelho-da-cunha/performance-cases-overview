import { SpectatorHost, createHostFactory } from '@ngneat/spectator';

import { ButtonModule } from '../button.module';

import { ButtonComponent } from './button.component';

const USE_CASES = {
  basic: `<will-button></will-button>`
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
    subject = createHost(
      USE_CASES.basic,
      { props: {
        label: 'Send',
        ariaLabel: 'Send form data'
      }}
    );
    expect(subject.component).toBeTruthy();
  });
});
