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
    'national': 'assets/icons/firefox/firefox-general-256-256.png',
    'kanto': 'https://cdn.bulbagarden.net/upload/2/25/LGPE_Kanto_Map.png',
    'updated-johto': 'https://cdn.bulbagarden.net/upload/6/64/JohtoMap.png',
    'updated-hoenn': 'https://cdn.bulbagarden.net/upload/8/85/Hoenn_ORAS.png',
    'extended-sinnoh': 'https://cdn.bulbagarden.net/upload/7/74/Pt_Sinnoh.png',
    'updated-unova': 'https://cdn.bulbagarden.net/upload/thumb/f/fc/Unova_B2W2_alt.png/800px-Unova_B2W2_alt.png',
    'kalos-central': 'https://cdn.bulbagarden.net/upload/thumb/8/8a/Kalos_alt.png/800px-Kalos_alt.png',
    'updated-alola': 'https://cdn.bulbagarden.net/upload/thumb/0/0b/Alola_USUM_artwork.png/800px-Alola_USUM_artwork.png',
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
