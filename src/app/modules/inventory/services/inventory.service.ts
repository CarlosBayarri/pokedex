import { Injectable } from '@angular/core';
import { InventoryHttpService } from './inventory-http.service';
import { PokemonResponse } from '../../../shared/models/pokemonResponse';
import { distinctUntilChanged, pluck, take, tap } from 'rxjs/operators';
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
      distinctUntilChanged(),
      pluck('pokemon_entries'),
      tap((pokemonIndex: PokemonIndex[]) => this.store.dispatch(actions.setInventory({inventory: pokemonIndex}))),
      take(1)
    ).subscribe((value: any) => console.log('[SERVICE] Call pokemon list'));
  }
  callPokemonDetail(url?: string): void {
    this.inventoryHttpService.getPokemonDetail(url).pipe(
      distinctUntilChanged(),
      tap((pokemon: any) => this.store.dispatch(actions.setDetail({pokemon}))),
      tap((pokemon: any) => localStorage.setItem('pokemon', JSON.stringify(pokemon))), // Dev purposes
      take(1)
    ).subscribe((value: any) => console.log('[SERVICE] Call pokemon detail'));
  }
}
