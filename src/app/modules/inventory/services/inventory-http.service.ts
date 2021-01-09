import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonResponse } from 'src/app/shared/models/pokemonResponse';

@Injectable({
  providedIn: 'root'
})
export class InventoryHttpService {

  endpoint = 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20';

  constructor(private http: HttpClient) { }

  getPokemonList(): Observable<PokemonResponse> {
    return this.http.get<PokemonResponse>(this.endpoint);
  }
  
}
