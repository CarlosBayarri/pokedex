import { Component, Input, OnInit } from '@angular/core';
import { PokemonIndex } from '../../../../shared/models/pokemon-index';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemon: PokemonIndex;

  constructor() { }

  ngOnInit(): void {
  }

}
