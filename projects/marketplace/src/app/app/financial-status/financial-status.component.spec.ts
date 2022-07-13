import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialStatusComponent } from './financial-status.component';

describe('FinancialStatusComponent', () => {
  let component: FinancialStatusComponent;
  let fixture: ComponentFixture<FinancialStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        FinancialStatusComponent
      ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
