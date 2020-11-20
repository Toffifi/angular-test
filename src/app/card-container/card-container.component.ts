import { Component, OnInit } from '@angular/core';

export interface Card {
  title: string;
  text: string;
}

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})


export class CardContainerComponent implements OnInit {
  cardsVisible = true;

  cards: Card[] = [
    {title: 'Card 1', text: 'This is card number 1'},
    {title: 'Card 2', text: 'This is card number 2'},
    {title: 'Card 3', text: 'This is card number 3'},
  ];
  constructor() { }

  ngOnInit() {
  }

  toggleCards(): void {
    this.cardsVisible = !this.cardsVisible;
  }
}
