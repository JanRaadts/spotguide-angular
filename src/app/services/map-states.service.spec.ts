import { TestBed } from '@angular/core/testing';

import { MapStatesService } from './map-states.service';

describe('MapStatesService', () => {
  let service: MapStatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapStatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
