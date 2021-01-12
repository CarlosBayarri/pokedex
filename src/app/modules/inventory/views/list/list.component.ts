import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { InventoryService } from '../../services/inventory.service';
import { Observable, Subscription } from 'rxjs';
import { PokemonResponse } from 'src/app/shared/models/pokemonResponse';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  pokemonResponse$: Observable<PokemonResponse>;
  inventorySubscription: Subscription;

  constructor(private store: Store<AppState>, private inventoryService: InventoryService) { }

  goUrl(url) {
    this.inventoryService.callPokemonList(url);
  }

  ngOnInit(): void {
    console.log('[INIT] List')
    this.inventoryService.callPokemonList(null);
    this.pokemonResponse$ = this.store.select('inventory').pipe(pluck('response'));
  }

}
