import { Injectable } from '@angular/core';

import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class AppCounterService {

  constructor(private logService: LogService) {
  }

  counter = 0;

  increase(): void {
    this.logService.log('increase counter...');
    this.counter++;
  }

  decrease(): void {
    this.logService.log('decrease counter...');
    this.counter--;
  }
}
