import { Router } from '@angular/router';

import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';

import { createHostFactory, SpectatorHost } from '@ngneat/spectator';
import { axe } from 'jest-axe';

import { routes } from '../app-routing.module';

import { ButtonModule } from '@will/ui-core/src/lib/button';
import { EmailFormFieldModule } from '@will/ui-core/src/lib/email-form-field';
import { PasswordFormFieldModule } from '@will/ui-core/src/lib/password-form-field';

import { AuthenticationComponent } from './authentication.component';

const USE_CASES = {
  basic: `<will-authentication></will-authentication>`
};

describe('AuthenticationComponent', () => {

  let subject: SpectatorHost<AuthenticationComponent>;

  const createHost = createHostFactory({
    component: AuthenticationComponent,
    declarations: [
      AuthenticationComponent
    ],
    declareComponent: false,
    imports: [
      RouterTestingModule.withRoutes(routes),
      HttpClientTestingModule,
      ButtonModule,
      EmailFormFieldModule,
      PasswordFormFieldModule
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

  it('should be disabled by default the button named as "Acessar".', () => {
    subject = createHost(USE_CASES.basic);

    const authorizeSpy = jest.spyOn(subject.component, 'authorize');

    const accessButton = subject.query('will-button .willuicore__button-default') as HTMLButtonElement;
    expect(accessButton.textContent?.trim()).toStrictEqual('Acessar');
    expect(accessButton.disabled).toStrictEqual(true);

    accessButton.dispatchEvent(new Event('click'));
    expect(authorizeSpy).not.toHaveBeenCalled();
  });

  it('should keep disabled the button named as "Acessar" when an invalid email is informed.', () => {
    subject = createHost(USE_CASES.basic);

    const authorizeSpy = jest.spyOn(subject.component, 'authorize');

    subject.typeInElement('willian@hotmail.', 'will-email-form-field .willuicore__email-form-field__input');
    subject.typeInElement('password', 'will-password-form-field .willuicore__password-form-field__input');
    subject.detectChanges();

    const accessButton = subject.query('will-button .willuicore__button-default') as HTMLButtonElement;
    expect(accessButton.textContent?.trim()).toStrictEqual('Acessar');
    expect(accessButton.disabled).toStrictEqual(true);

    accessButton.dispatchEvent(new Event('click'));
    expect(authorizeSpy).not.toHaveBeenCalled();

    expect(subject.query('will-email-form-field .willuicore__email-form-field__input')?.classList).toContain('ng-invalid');
    expect(subject.query('will-password-form-field .willuicore__password-form-field__input')?.classList).toContain('ng-valid');
  });

  it('should keep disabled the button named as "Acessar" when an invalid password is informed.', () => {
    subject = createHost(USE_CASES.basic);

    const authorizeSpy = jest.spyOn(subject.component, 'authorize');

    subject.typeInElement('willian@hotmail.com', 'will-email-form-field .willuicore__email-form-field__input');
    subject.typeInElement('pas', 'will-password-form-field .willuicore__password-form-field__input');
    subject.detectChanges();

    const accessButton = subject.query('will-button .willuicore__button-default') as HTMLButtonElement;
    expect(accessButton.textContent?.trim()).toStrictEqual('Acessar');
    expect(accessButton.disabled).toStrictEqual(true);

    accessButton.dispatchEvent(new Event('click'));
    expect(authorizeSpy).not.toHaveBeenCalled();

    expect(subject.query('will-email-form-field .willuicore__email-form-field__input')?.classList).toContain('ng-valid');
    expect(subject.query('will-password-form-field .willuicore__password-form-field__input')?.classList).toContain('ng-invalid');
  });

  it('should display an error message and disable "Acessar" button when an invalid email will be informed.', () => {
    subject = createHost(USE_CASES.basic);

    const authorizeSpy = jest.spyOn(subject.component, 'authorize');

    let accessButton: HTMLButtonElement;

    subject.typeInElement('willian@hotmail.com', 'will-email-form-field .willuicore__email-form-field__input');
    subject.typeInElement('password', 'will-password-form-field .willuicore__password-form-field__input');
    subject.detectChanges();

    accessButton = subject.query('will-button .willuicore__button-default') as HTMLButtonElement;
    expect(accessButton.textContent?.trim()).toStrictEqual('Acessar');
    expect(accessButton.disabled).toStrictEqual(false);

    expect(subject.query('will-email-form-field .willuicore__email-form-field__input')?.classList).toContain('ng-valid');
    expect(subject.query('will-password-form-field .willuicore__password-form-field__input')?.classList).toContain('ng-valid');

    subject.typeInElement('willian@hotmail.', 'will-email-form-field .willuicore__email-form-field__input');
    subject.detectChanges();

    accessButton = subject.query('will-button .willuicore__button-default') as HTMLButtonElement;
    accessButton.dispatchEvent(new Event('click'));
    expect(authorizeSpy).not.toHaveBeenCalled();

    const errorMessage = subject.query('will-email-form-field .willuicore__email-form-field__error') as HTMLDivElement;
    expect(errorMessage).toBeTruthy();
    expect(errorMessage.textContent?.trim()).toStrictEqual('Por favor, verifique o e-mail informado!');

    expect(subject.query('will-email-form-field .willuicore__email-form-field__input')?.classList).toContain('ng-invalid');
    expect(subject.query('will-password-form-field .willuicore__password-form-field__input')?.classList).toContain('ng-valid');
  });

  it('should enable "Acessar" button when a valid email is informed after an invalid email to be informed.', () => {
    subject = createHost(USE_CASES.basic);
    subject.fixture.autoDetectChanges(true);

    const authorizeSpy = jest.spyOn(subject.component, 'authorize');

    let accessButton: HTMLButtonElement;
    let errorMessage: HTMLDivElement;

    subject.typeInElement('willian@hotmail.', 'will-email-form-field .willuicore__email-form-field__input');
    subject.typeInElement('password', 'will-password-form-field .willuicore__password-form-field__input');
    subject.detectChanges();

    expect(subject.query('will-email-form-field .willuicore__email-form-field__input')?.classList).toContain('ng-invalid');
    expect(subject.query('will-password-form-field .willuicore__password-form-field__input')?.classList).toContain('ng-valid');

    errorMessage = subject.query('will-email-form-field .willuicore__email-form-field__error') as HTMLDivElement;
    expect(errorMessage).toBeTruthy();
    expect(errorMessage.textContent?.trim()).toStrictEqual('Por favor, verifique o e-mail informado!');

    accessButton = subject.query('will-button .willuicore__button-default') as HTMLButtonElement;
    expect(accessButton.textContent?.trim()).toStrictEqual('Acessar');
    expect(accessButton.disabled).toStrictEqual(true);

    accessButton.dispatchEvent(new Event('click'));
    expect(authorizeSpy).not.toHaveBeenCalled();

    subject.typeInElement('willian@hotmail.com', 'will-email-form-field .willuicore__email-form-field__input');
    subject.detectChanges();

    accessButton = subject.query('will-button .willuicore__button-default') as HTMLButtonElement;
    expect(accessButton.textContent?.trim()).toStrictEqual('Acessar');
    expect(accessButton.disabled).toStrictEqual(false);

    errorMessage = subject.query('will-email-form-field .willuicore__email-form-field__error') as HTMLDivElement;
    expect(errorMessage).toBeNull();

    expect(subject.query('will-email-form-field .willuicore__email-form-field__input')?.classList).toContain('ng-valid');
    expect(subject.query('will-password-form-field .willuicore__password-form-field__input')?.classList).toContain('ng-valid');

    accessButton.dispatchEvent(new Event('click'));
    expect(authorizeSpy).toHaveBeenCalled();
  });

  it('should redirect the user to the "Home" user interface if it will be authenticated.', fakeAsync(() => {
    subject = createHost(USE_CASES.basic);

    const router = TestBed.inject(Router);
    const navigateByUrlSpy = jest.spyOn(router, 'navigateByUrl');

    const authorizeSpy = jest.spyOn(subject.component, 'authorize');

    let accessButton: HTMLButtonElement;
    let errorMessage: HTMLDivElement;
    let httpController: HttpTestingController;
    let authRequest: TestRequest;

    subject.typeInElement('willian@hotmail.com', 'will-email-form-field .willuicore__email-form-field__input');
    subject.typeInElement('password', 'will-password-form-field .willuicore__password-form-field__input');
    subject.detectChanges();

    accessButton = subject.query('will-button .willuicore__button-default') as HTMLButtonElement;
    expect(accessButton.textContent?.trim()).toStrictEqual('Acessar');
    expect(accessButton.disabled).toStrictEqual(false);

    expect(subject.query('will-email-form-field .willuicore__email-form-field__input')?.classList).toContain('ng-valid');
    expect(subject.query('will-password-form-field .willuicore__password-form-field__input')?.classList).toContain('ng-valid');

    errorMessage = subject.query('will-email-form-field .willuicore__email-form-field__error') as HTMLDivElement;
    expect(errorMessage).toBeNull();

    accessButton.dispatchEvent(new Event('click'));
    expect(authorizeSpy).toHaveBeenCalled();

    httpController = TestBed.inject(HttpTestingController);
    authRequest = httpController.expectOne(
      'http://localhost:3000/clients?email=willian@hotmail.com&password=password',
      'Expects one request to authenticate the user access!'
    );
    authRequest.flush([
      {
        "id": 1,
        "name": "Willian Coelho da Cunha",
        "email": "willian@hotmail.com",
        "password": "password",
        "previous_access": 1657700671908
      }
    ]);
    tick(100);
    subject.detectChanges();

    expect(navigateByUrlSpy).toHaveBeenCalledTimes(1);
    expect(navigateByUrlSpy).toBeCalledWith('/home');
  }));
});
