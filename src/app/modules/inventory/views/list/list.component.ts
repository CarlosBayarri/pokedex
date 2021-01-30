import { Component, HostListener, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { InventoryService } from '../../services/inventory.service';
import { Observable, Subscription } from 'rxjs';
import { PokemonResponse } from 'src/app/shared/models/pokemonResponse';
import { distinctUntilChanged, pluck } from 'rxjs/operators';
import { RegionsService } from '../../../regions/services/regions.service';
import { Region } from 'src/app/shared/models/region';
import { PokemonIndex } from '../../../../shared/models/pokemon-index';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  listColumns: number;
  inventory$: Observable<PokemonIndex[]>;
  regionResponse$: Observable<PokemonResponse>;
  regionSelected$: Observable<Region>;

  constructor(private store: Store<AppState>, private inventoryService: InventoryService, private regionService: RegionsService) { }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const width = event.target.innerWidth;
    this.changeColumnsList(width);
  }

  goRegion(region: any): void {
    this.regionService.selectRegion(region);
  }

  changeColumnsList(width: number): void {
    if (width <= 600) {
      this.listColumns = 1;
    } else if (width <= 768) {
      this.listColumns = 4;
    } else if (width <= 1024) {
      this.listColumns = 5;
    } else if (width <= 1440) {
      this.listColumns = 8;
    } else {
      this.listColumns = 10;
    }
  }
  ngOnInit(): void {
    console.log('[INIT] List');
    this.regionService.callRegionsList(null);
    this.inventory$ = this.store.select('inventory').pipe(pluck('inventory'));
    this.regionResponse$ = this.store.select('regions').pipe(pluck('responseRegions'));
    this.regionSelected$ = this.store.select('regions').pipe(pluck('region'), distinctUntilChanged());
    this.regionSelected$.subscribe((region: any) => {
      if (region) { this.inventoryService.callPokemonList(region.url); }
    });
    this.changeColumnsList(window.screen.width);
  }

}
