import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonResponse } from 'src/app/shared/models/pokemonResponse';

@Injectable({
  providedIn: 'root'
})
export class InventoryHttpService {

  constructor(private http: HttpClient) { }

  getPokemonList(url?: string): Observable<PokemonResponse> {
    return this.http.get<PokemonResponse>(url);
  }
  getPokemonDetail(url?: string): Observable<any> {
    return this.http.get<any>(url);
  }
}
