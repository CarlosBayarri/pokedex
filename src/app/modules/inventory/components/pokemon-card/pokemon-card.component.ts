import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonIndex } from '../../../../shared/models/pokemon-index';
import { InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemon: PokemonIndex;

  constructor(private router: Router, private inventoryservice: InventoryService) { }

  goPokemonDetail(pokemon: any) {
    const url = pokemon.pokemon_species.url;
    this.inventoryservice.callPokemonDetail(url.includes('pokemon-species') ? url.replace('pokemon-species', 'pokemon') : url);
    this.router.navigate(['/inventory/' + pokemon.entry_number]);
  }

  ngOnInit(): void {
  }

}
