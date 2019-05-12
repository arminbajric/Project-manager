import { TestBed } from '@angular/core/testing';

import { WorkCircleService } from './work-circle.service';

describe('WorkCircleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkCircleService = TestBed.get(WorkCircleService);
    expect(service).toBeTruthy();
  });
});
