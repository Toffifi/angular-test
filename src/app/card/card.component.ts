import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../card-container/card-container.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: Card;
  @Input() index: number;

  title = 'My title';
  disabled = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.disabled = true;
    }, 3000);
  }
  changeTitle(value): void {
    this.card.title = 'This title has been changed';
    value.style.color = 'red';
  }
  inputHeandler(event): void {
    this.card.title = event.target.value;
  }

}
