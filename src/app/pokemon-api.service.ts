import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonAPIService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {}

  getPokemonByName(name: string) {
    const url = `${this.apiUrl}${name}`;
    return this.http.get(url);
  }

  getAllPokemons(): Observable<any> {
    return this.http.get(`${this.apiUrl}?limit=10`);
  }
  
}
