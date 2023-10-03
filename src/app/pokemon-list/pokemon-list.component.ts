import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Pokemon } from '../pokemon';
import { PokemonAPIService } from '../pokemon-api.service';
import { PokemonDetailModalComponent } from '../pokemon-detail-modal/pokemon-detail-modal.component';
import { PokemonGlobalService } from '../pokemon-global.service';
import { PokemonDetailService } from '../pokemondetail.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = []; 

  constructor(private pokemonService: PokemonAPIService, 
    private pokemonDataService: PokemonGlobalService,
    private pokemonDetailModalService: PokemonDetailService,
    private dialog: MatDialog) {}

  ngOnInit(): void {
    this.pokemonDataService.pokemonList$.subscribe((pokemonList) => {
      this.pokemons = pokemonList;
    });

    this.pokemonService.getAllPokemons().subscribe((data: any) => {
      this.fetchPokemonData(data.results);
    });
  }

  private fetchPokemonData(pokemonList: any[]): void {
    pokemonList.forEach((pokemon) => {
      this.pokemonService.getPokemonByName(pokemon.name).subscribe((data: any) => {
        if (data) {
          const newPokemon = new Pokemon();
          newPokemon.name = data.name;
          newPokemon.sprites = data.sprites;
          this.pokemonDataService.addPokemonToPokemonList(newPokemon);
        }
      });
    });
  }

  openPokemonDetailModal(pokemon: Pokemon) {
    console.log(pokemon);
    this.dialog.open(PokemonDetailModalComponent, {
      data: pokemon, 
    });
  }

  removePokemon(pokemon: Pokemon): void {
    this.pokemonDataService.removePokemonFromPokemonList(pokemon);
  }

  // Inicie a edição do nome
  startEditing(pokemon: Pokemon): void {
    pokemon.isEditing = true;
  }

  // Conclua a edição do nome
  finishEditing(pokemon: Pokemon): void {
    pokemon.isEditing = false;
  }
}
