import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { RegionsService } from '../../services/regions.service';
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

  constructor(private store: Store<AppState>, private regionsService: RegionsService) { }

  goUrl(url) {
    this.regionsService.callRegionsList(url);
  }

  ngOnInit(): void {
    console.log('[INIT] Region List');
    this.regionsService.callRegionsList(null);
    this.pokemonResponse$ = this.store.select('regions').pipe(pluck('response'));
  }

}
