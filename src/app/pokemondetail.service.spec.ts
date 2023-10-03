import { TestBed } from '@angular/core/testing';

import { PokemondetailService } from './pokemondetail.service';

describe('PokemondetailService', () => {
  let service: PokemondetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemondetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
