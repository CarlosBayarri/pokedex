import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { InventoryService } from '../../services/inventory.service';
import { Observable, Subscription } from 'rxjs';
import { PokemonResponse } from 'src/app/shared/models/pokemonResponse';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  pokemonResponse$: Observable<PokemonResponse>;
  inventorySubscription: Subscription;

  constructor(private store: Store<AppState>, private inventoryService: InventoryService) { }

  ngOnInit(): void {
    console.log('[INIT] List')
    this.inventoryService.callPokemonList();
    /*this.inventorySubscription = this.store.select('inventory').subscribe(({inventory}) => {

    });*/
  }

}
