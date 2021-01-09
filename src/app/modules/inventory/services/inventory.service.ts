import { Injectable } from '@angular/core';
import { InventoryHttpService } from './inventory-http.service';
import { PokemonResponse } from '../../../shared/models/pokemonResponse';
import { take, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../../../store/actions';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private inventoryHttpService: InventoryHttpService, private store: Store<AppState>) { }

  callPokemonList(): void {
    this.inventoryHttpService.getPokemonList().pipe(
      take(1),
      tap((pokemonResponse: PokemonResponse) => this.store.dispatch(actions.setList({pokemonList: pokemonResponse.results}))),
      tap((pokemonResponse: PokemonResponse) => this.store.dispatch(actions.setResponse({pokemonResponse: pokemonResponse})))
    ).subscribe(console.log);
  }

}
