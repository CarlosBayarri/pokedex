import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { InventoryService } from '../../services/inventory.service';
import { BehaviorSubject, Observable, ReplaySubject, Subscription } from 'rxjs';
import { PokemonResponse } from 'src/app/shared/models/pokemonResponse';
import { distinctUntilChanged, pluck, take, takeUntil, tap } from 'rxjs/operators';
import { RegionsService } from '../../../regions/services/regions.service';
import { Region } from 'src/app/shared/models/region';
import { PokemonIndex } from '../../../../shared/models/pokemon-index';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  listColumns: number;
  inventory$: Observable<PokemonIndex[]>;
  regionResponse$: Observable<PokemonResponse>;
  regionSelected$: Observable<Region>;
  destroy$: ReplaySubject<boolean> = new ReplaySubject(1);

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
      this.listColumns = 7;
    } else {
      this.listColumns = 9;
    }
  }
  ngOnInit(): void {
    console.log('[INIT] List');
    this.changeColumnsList(window.screen.width);
    this.inventory$ = this.store.select('inventory').pipe(
      distinctUntilChanged(),
      pluck('inventory'),
      takeUntil(this.destroy$)
    );
    this.regionResponse$ = this.store.select('regions').pipe(
      tap((regions: any) => {
        if (!regions.responseRegions) {
          this.regionService.callRegionsList(null);
        }
      }),
      distinctUntilChanged(),
      pluck('responseRegions'),
      takeUntil(this.destroy$)
    );
    this.regionSelected$ = this.store.select('regions').pipe(
      distinctUntilChanged(),
      pluck('region'),
      takeUntil(this.destroy$)
    );
    this.regionSelected$.subscribe((region: any) => {
        if (region) {
          this.inventoryService.callPokemonList(region.url);
        }
      });
  }

  ngOnDestroy(): void {
    console.log('[DESTROY] List');
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
