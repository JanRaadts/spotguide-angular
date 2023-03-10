import { TestBed } from '@angular/core/testing';

import { SurfspotsService } from './surfspots.service';

describe('SurfspotsService', () => {
  let service: SurfspotsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurfspotsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
