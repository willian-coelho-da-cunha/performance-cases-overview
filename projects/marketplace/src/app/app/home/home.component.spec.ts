import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ButtonModule } from '@will/ui-core/src/lib/button';

import { HomeComponent } from './home.component';
import { FinancialStatusComponent } from '../financial-status/financial-status.component';
import { LatestRecomendationsComponent } from '../latest-recomendations/latest-recomendations.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        FinancialStatusComponent,
        LatestRecomendationsComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule,
        ButtonModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
