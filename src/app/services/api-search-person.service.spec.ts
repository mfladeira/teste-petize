import { TestBed } from '@angular/core/testing';

import { ApiSearchPersonService } from './api-search-person.service';

describe('ApiSearchPersonService', () => {
  let service: ApiSearchPersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiSearchPersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
