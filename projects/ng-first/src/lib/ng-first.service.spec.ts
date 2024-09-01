import { TestBed } from '@angular/core/testing';

import { NgFirstService } from './ng-first.service';

describe('NgFirstService', () => {
  let service: NgFirstService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgFirstService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
