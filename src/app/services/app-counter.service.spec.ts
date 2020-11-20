/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AppCounterService } from './app-counter.service';

describe('Service: AppCounter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppCounterService]
    });
  });

  it('should ...', inject([AppCounterService], (service: AppCounterService) => {
    expect(service).toBeTruthy();
  }));
});
