import { Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { fromEvent, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, pluck, takeUntil, tap } from 'rxjs/operators';
import { setPokemonFilter } from '../../../store/actions/inventory.actions';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnDestroy {

  public isLoading$: Observable<boolean>;
  public titlePage$: Observable<string>;
  public openInputSearch: boolean;
  private destroy$: Subject<any> = new Subject();
  public pokemonFilter$: Observable<string>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.isLoading$ = this.store.select('ui').pipe(pluck('isLoading'));
    this.titlePage$ = this.store.select('ui').pipe(pluck('titlePage'));
    this.pokemonFilter$ = this.store.select('inventory').pipe(pluck('pokemonFilter'));
  }

  enableSearch(): void {
    this.openInputSearch = !this.openInputSearch;
    setTimeout(() => {
      if (this.openInputSearch) {
        const input$ = fromEvent(document.getElementById('inputSearchTarget'), 'keyup').pipe(
          debounceTime(1000),
          pluck('target', 'value'),
          distinctUntilChanged(),
          tap((filter: string) => this.store.dispatch(setPokemonFilter({pokemonFilter: filter}))),
          takeUntil(this.destroy$)
        );
        input$.subscribe();
      } else {
        this.destroy$.next();
        this.destroy$.complete();
      }
    }, 0);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
