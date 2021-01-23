import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonResponse } from 'src/app/shared/models/pokemonResponse';

@Injectable({
  providedIn: 'root'
})
export class RegionsHttpService {

  endpoint = 'https://pokeapi.co/api/v2/pokedex/?limit=20&offset=0';

  constructor(private http: HttpClient) { }

  getRegionList(url?: string): Observable<PokemonResponse> {
    return this.http.get<PokemonResponse>(url ? url : this.endpoint);
  }

}
