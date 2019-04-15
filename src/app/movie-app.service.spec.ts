import { TestBed } from '@angular/core/testing';

import { MovieAppService } from './movie-app.service';

describe('MovieAppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieAppService = TestBed.get(MovieAppService);
    expect(service).toBeTruthy();
  });
});
