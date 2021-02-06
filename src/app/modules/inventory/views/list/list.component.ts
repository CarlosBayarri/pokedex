import { animate, animateChild, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { distinctUntilChanged, map, pluck, switchMap, takeUntil, tap } from 'rxjs/operators';
import { AppState } from 'src/app/app.reducer';
import { PokemonResponse } from 'src/app/shared/models/pokemonResponse';
import { Region } from 'src/app/shared/models/region';
import { PokemonIndex } from '../../../../shared/models/pokemon-index';
import * as actions from '../../../../store/actions';
import { RegionsService } from '../../../regions/services/regions.service';
import { InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [
    // nice stagger effect when showing existing elements
    trigger('list', [
      transition(':enter', [
        // child animation selector + stagger
        query('@items',
          stagger(100, animateChild())
        )
      ]),
    ]),
    trigger('items', [
      // cubic-bezier for a tiny bouncing feel
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),
        animate('1s cubic-bezier(.8,-0.6,0.2,1.5)',
          style({ transform: 'scale(1)', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'scale(1)', opacity: 1, height: '*' }),
        animate('1s cubic-bezier(.8,-0.6,0.2,1.5)',
          style({ transform: 'scale(0.5)', opacity: 0, height: '0px', margin: '0px' }))
      ]),
    ])
  ],
})
export class ListComponent implements OnInit, OnDestroy {

  listColumns: number;
  inventory$: Observable<PokemonIndex[]>;
  pokemonFilter$: Observable<string>;
  regionResponse$: Observable<PokemonResponse>;
  regionSelected$: Observable<Region>;
  destroy$: ReplaySubject<boolean> = new ReplaySubject(1);
  private pokemonFilterSubject$: BehaviorSubject<string> = new BehaviorSubject(null);

  constructor(private store: Store<AppState>, private inventoryService: InventoryService, private regionService: RegionsService) { }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const width = event.target.innerWidth;
    this.changeColumnsList(width);
  }

  goRegion(region: any): void {
    this.regionService.selectRegion(region);
    this.store.dispatch(actions.unSetPokemonFilter());
  }

  changeColumnsList(width: number): void {
    if (width <= 600) {
      this.listColumns = 1;
    } else if (width <= 768) {
      this.listColumns = 4;
    } else if (width <= 1024) {
      this.listColumns = 5;
    } else if (width <= 1440) {
      this.listColumns = 6;
    } else {
      this.listColumns = 9;
    }
  }
  ngOnInit(): void {
    console.log('[INIT] List');
    this.changeColumnsList(window.screen.width);

    this.inventory$ = this.store.select('inventory').pipe(
      distinctUntilChanged(),
      pluck('pokemonFilter'),
      takeUntil(this.destroy$),
      switchMap((pokemonSearch: string) => {
        return this.store.select('inventory').pipe(
          pluck('inventory'),
          map((pokemonIndex: any[]) => {
            if (pokemonSearch) {
              return pokemonIndex.filter(index => {
                if (index.pokemon_species.name.includes(pokemonSearch)) {
                  return index;
                }
              });
            } else {
              return pokemonIndex;
            }
          })
        );
      }),
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
