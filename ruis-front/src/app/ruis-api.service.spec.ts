import { TestBed } from '@angular/core/testing';

import { RuisApiService } from './ruis-api.service';

describe('RuisApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RuisApiService = TestBed.get(RuisApiService);
    expect(service).toBeTruthy();
  });
});
