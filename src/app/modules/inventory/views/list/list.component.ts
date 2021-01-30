import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { InventoryService } from '../../services/inventory.service';
import { Observable, Subscription } from 'rxjs';
import { PokemonResponse } from 'src/app/shared/models/pokemonResponse';
import { pluck } from 'rxjs/operators';
import { RegionsService } from '../../../regions/services/regions.service';
import { Region } from 'src/app/shared/models/region';
import { PokemonIndex } from '../../../../shared/models/pokemon-index';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  inventory$: Observable<PokemonIndex[]>;
  regionResponse$: Observable<PokemonResponse>;
  inventorySubscription: Subscription;
  regionSelected: Observable<Region>;

  constructor(private store: Store<AppState>, private inventoryService: InventoryService, private regionService: RegionsService) { }

  goRegion(region: any): void {
    this.inventoryService.callPokemonList(region.url);
  }

  ngOnInit(): void {
    console.log('[INIT] List');
    this.regionService.callRegionsList(null);
    this.inventory$ = this.store.select('inventory').pipe(pluck('inventory'));
    this.regionResponse$ = this.store.select('regions').pipe(pluck('responseRegions'));
    this.regionSelected = this.store.select('regions').pipe(pluck('region'));
    this.regionSelected.subscribe((region: any) => {
      if (region) { this.inventoryService.callPokemonList(region.url); }
    });

  }

}
