import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonGlobalService {
  private pokemonListSubject = new BehaviorSubject<Pokemon[]>([]);
  pokemonList$ = this.pokemonListSubject.asObservable();

  constructor() {}

  addPokemonToPokemonList(pokemon: Pokemon) {
    const currentList = this.pokemonListSubject.value;
    currentList.push(pokemon);
    this.pokemonListSubject.next(currentList);
  }

  removePokemonFromPokemonList(pokemon: Pokemon) {
    const currentList = this.pokemonListSubject.value;
    const updatedList = currentList.filter((p) => p.name !== pokemon.name);
    this.pokemonListSubject.next(updatedList);
  }

  getPokemonList(): Pokemon[] {
    return this.pokemonListSubject.value;
  }
}
