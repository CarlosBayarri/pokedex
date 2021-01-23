import { TestBed } from '@angular/core/testing';

import { RegionsHttpService } from './regions-http.service';

describe('RegionsHttpService', () => {
  let service: RegionsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegionsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
