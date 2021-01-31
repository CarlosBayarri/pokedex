import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { PokemonIndex } from '../../../../shared/models/pokemon-index';
import { AppState } from '../../../../app.reducer';
import { Store } from '@ngrx/store';
import { pluck } from 'rxjs/operators';
import * as actions from '../../../../store/actions';
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
    // this.store.dispatch(actions.setDetail({pokemon}));
    this.inventoryservice.callPokemonDetail(pokemon.pokemon_species.url);
    this.router.navigate(['/inventory/' + pokemon.entry_number]);
  }

  ngOnInit(): void {
  }

}
