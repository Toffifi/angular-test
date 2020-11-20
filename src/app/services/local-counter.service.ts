import { Injectable } from '@angular/core';

export class LocalCounterService {

  constructor() { }

  counter = 0;

  increase(): void {
    this.counter++;
  }

  decrease(): void {
    this.counter--;
}
}
