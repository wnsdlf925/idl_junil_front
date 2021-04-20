import { TestBed } from '@angular/core/testing';

import { AdTopBarService } from './ad-top-bar.service';

describe('AdTopBarService', () => {
  let service: AdTopBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdTopBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
