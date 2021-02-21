import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { AppState } from './app.reducer';
import { changeSidebar, hideSidebar, showSidebar } from './store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'pokedex';
  public showSidebar$: Observable<boolean>;

  constructor(updates: SwUpdate, private store: Store<AppState>) {
    updates.available.subscribe(event => {
      updates.activateUpdate().then(() => document.location.reload());
    });
  }

  changeShowSidebar(event: boolean): void {
    this.store.dispatch(event ? hideSidebar() : showSidebar());
  }
  ngOnInit(): void {
    this.showSidebar$ = this.store.select('ui').pipe(pluck('showSidebar'));
  }

}
