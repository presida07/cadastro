import { TestBed } from '@angular/core/testing';

import { AuthentivationService } from './authentivation.service';

describe('AuthentivationService', () => {
  let service: AuthentivationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthentivationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
