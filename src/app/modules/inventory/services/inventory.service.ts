import { Injectable } from '@angular/core';
import { InventoryHttpService } from './inventory-http.service';
import { PokemonResponse } from '../../../shared/models/pokemonResponse';
import { pluck, take, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../../../store/actions';
import { PokemonIndex } from '../../../shared/models/pokemon-index';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private inventoryHttpService: InventoryHttpService, private store: Store<AppState>) { }

  callPokemonList(url?: string): void {
    this.inventoryHttpService.getPokemonList(url).pipe(
      take(1),
      pluck('pokemon_entries'),
      tap((pokemonIndex: PokemonIndex[]) => this.store.dispatch(actions.setInventory({inventory: pokemonIndex})))
    ).subscribe(console.log);
  }

}
