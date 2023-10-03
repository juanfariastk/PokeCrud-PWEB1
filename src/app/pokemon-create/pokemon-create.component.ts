import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonAPIService } from '../pokemon-api.service';
import { PokemonGlobalService } from '../pokemon-global.service';

@Component({
  selector: 'app-pokemon-create',
  templateUrl: './pokemon-create.component.html',
  styleUrls: ['./pokemon-create.component.scss'],
})
export class PokemonCreateComponent {
  pokemonName: string = '';
  searchResults: Pokemon[] = [];

  constructor(
    private pokemonService: PokemonAPIService,
    private pokemonDataService: PokemonGlobalService
  ) {}

  searchPokemon() {
    if (this.pokemonName.trim() !== '') {
      this.pokemonService.getPokemonByName(this.pokemonName.toLowerCase()).subscribe((data) => {
        this.searchResults = data ? [data] : [];
      });
    }
  }

  addPokemonToList(pokemon: Pokemon) {
    if (!this.isPokemonInList(pokemon.name || '')) {
      this.pokemonDataService.addPokemonToPokemonList(pokemon);
      this.pokemonName = '';
      this.searchResults = [];
    }
  }

  isPokemonInList(pokemonName: string): boolean {
    const pokemonList = this.pokemonDataService.getPokemonList();
    return pokemonList.some((pokemon) => pokemon.name === pokemonName);
  }
}
