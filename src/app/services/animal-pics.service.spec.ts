import { TestBed } from '@angular/core/testing';

import { AnimalPicsService } from './animal-pics.service';

describe('AnimalPicsService', () => {
  let service: AnimalPicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimalPicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
