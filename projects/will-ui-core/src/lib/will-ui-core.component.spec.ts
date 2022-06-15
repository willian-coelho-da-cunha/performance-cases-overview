import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WillUiCoreComponent } from './will-ui-core.component';

describe('WillUiCoreComponent', () => {
  let component: WillUiCoreComponent;
  let fixture: ComponentFixture<WillUiCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WillUiCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WillUiCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
