import { createServiceFactory, SpectatorService } from '@ngneat/spectator';

import { UtilService } from './util.service';

describe('UtilService', () => {

  let subject: SpectatorService<UtilService>;

  const createService = createServiceFactory({
    service: UtilService
  });

  it('should create an instance.', () => {
    subject = createService();
    expect(subject.service).toBeTruthy();
  });
});
