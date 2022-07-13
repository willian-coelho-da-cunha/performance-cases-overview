import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonModule } from '@will/ui-core/src/lib/button';
import { EmailFormFieldModule } from '@will/ui-core/src/lib/email-form-field';
import { PasswordFormFieldModule } from '@will/ui-core/src/lib/password-form-field';

import { AuthenticationComponent } from './authentication.component';

describe('AuthenticationComponent', () => {
  let component: AuthenticationComponent;
  let fixture: ComponentFixture<AuthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AuthenticationComponent
      ],
      imports: [
        ButtonModule,
        EmailFormFieldModule,
        PasswordFormFieldModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
