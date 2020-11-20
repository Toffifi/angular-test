/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LocalCounterService } from './local-counter.service';

describe('Service: LocalCounter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalCounterService]
    });
  });

  it('should ...', inject([LocalCounterService], (service: LocalCounterService) => {
    expect(service).toBeTruthy();
  }));
});
