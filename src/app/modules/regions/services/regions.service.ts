import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, take, tap } from 'rxjs/operators';
import { AppState } from 'src/app/app.reducer';
import { PokemonResponse } from 'src/app/shared/models/pokemonResponse';
import { RegionsHttpService } from './regions-http.service';
import * as actions from '../../../store/actions';

@Injectable({
  providedIn: 'root'
})
export class RegionsService {

  private images = {
    kanto: 'https://cdn.bulbagarden.net/upload/2/25/LGPE_Kanto_Map.png',
    'original-johto': 'https://cdn.bulbagarden.net/upload/6/64/JohtoMap.png',
    hoenn: 'https://cdn.bulbagarden.net/upload/8/85/Hoenn_ORAS.png'
  }

  constructor(private regionHttpService: RegionsHttpService, private store: Store<AppState>) { }

  getImages(): any {
    return this.images;
  }

  wrapImages(response: PokemonResponse): PokemonResponse {
    response.results.forEach(element => {
      if (this.images[element.name]) {
        element.image = this.images[element.name];
      }
    });
    return response;
  }

  callRegionsList(url?: string): void {
    this.regionHttpService.getRegionList(url).pipe(
      take(1),
      map((pokemonResponse: PokemonResponse) => this.wrapImages(pokemonResponse)),
      tap((pokemonResponse: PokemonResponse) => this.store.dispatch(actions.setResponseRegions({responseRegions: pokemonResponse})))
    ).subscribe(console.log);
  }
  
}
