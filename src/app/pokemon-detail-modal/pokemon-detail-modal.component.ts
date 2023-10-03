import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonDetailService } from '../pokemondetail.service';

@Component({
  selector: 'app-pokemon-detail-modal',
  templateUrl: './pokemon-detail-modal.component.html',
  styleUrls: ['./pokemon-detail-modal.component.scss'],
})
export class PokemonDetailModalComponent implements OnInit {
  pokemon: Pokemon | null = null;

  constructor(private pokemonDetailModalService: PokemonDetailService) {}

  ngOnInit(): void {
    this.pokemonDetailModalService.pokemon$.subscribe((pokemon) => {
      this.pokemon = pokemon;
    });
  }

  close() {
    this.pokemonDetailModalService.close();
  }
}