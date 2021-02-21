import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { from, fromEvent, Observable, ReplaySubject } from 'rxjs';
import { debounceTime, distinct, map, pluck, takeUntil, tap } from 'rxjs/operators';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../../../../store/actions/index';
import { Pokemon } from '../../../../shared/models/pokemonDetail';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {

  public pokemon$: Observable<Pokemon>;
  private destroy$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.pokemon$ = this.store.select('inventory').pipe(pluck('pokemon'));
    if (localStorage.getItem('pokemon')) {
      this.store.dispatch(actions.setDetail({pokemon: JSON.parse(localStorage.getItem('pokemon'))}));
    }
    fromEvent(document.getElementsByClassName('mat-drawer-content mat-sidenav-content'), 'scroll').pipe(
      map((event) => event.target['scrollTop']),
      debounceTime(50),
      distinct(), 
      tap((value) => {
        if(value > 300) {
          const header = document.getElementsByClassName('pokemon-detail-header-aux')[0];
          header.classList.add('float-header');
        } else {
          const header = document.getElementsByClassName('pokemon-detail-header-aux')[0];
          header.classList.remove('float-header');
        }
      }),
      takeUntil(this.destroy$)
    ).subscribe(console.log);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
