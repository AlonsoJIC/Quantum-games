import { Component } from '@angular/core';
import { CARDS } from '../../models/cards.model';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  card = CARDS;

}
