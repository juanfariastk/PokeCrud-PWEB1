import { TestBed } from '@angular/core/testing';

import { PokemonGlobalService } from './pokemon-global.service';

describe('PokemonGlobalService', () => {
  let service: PokemonGlobalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonGlobalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
