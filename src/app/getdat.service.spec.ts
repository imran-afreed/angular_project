import { TestBed } from '@angular/core/testing';

import { GetdatService } from './getdat.service';

describe('GetdatService', () => {
  let service: GetdatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetdatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
