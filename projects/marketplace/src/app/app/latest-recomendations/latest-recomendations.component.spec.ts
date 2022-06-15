import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestRecomendationsComponent } from './latest-recomendations.component';

describe('LatestRecomendationsComponent', () => {
  let component: LatestRecomendationsComponent;
  let fixture: ComponentFixture<LatestRecomendationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestRecomendationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestRecomendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
