import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonDetailService {
  private pokemonSubject = new BehaviorSubject<Pokemon | null>(null);
  pokemon$ = this.pokemonSubject.asObservable();

  open(pokemon: Pokemon) {
    console.log(pokemon)
    this.pokemonSubject.next(pokemon);
  }

  close() {
    this.pokemonSubject.next(null);
  }
}
