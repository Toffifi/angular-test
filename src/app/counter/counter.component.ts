import { LocalCounterService } from './../services/local-counter.service';
import { AppCounterService } from './../services/app-counter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers: [LocalCounterService]
})
export class CounterComponent {

  constructor(private localCounterService: LocalCounterService, private appCounterService: AppCounterService) { }

  getCounter(): number {
    return this.localCounterService.counter;
  }

  increase(): void {
    this.localCounterService.increase();
  }

  decrease(): void {
    this.localCounterService.decrease();
  }

}
