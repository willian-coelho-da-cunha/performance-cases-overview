import { TestBed } from '@angular/core/testing';

import { WillUiCoreService } from './will-ui-core.service';

describe('WillUiCoreService', () => {
  let service: WillUiCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WillUiCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
