import { useQuery } from "react-query";
import { Pokemon } from "../models/pokemon.model";
import { PokemonRepository } from "../repository/pokemon.repository";

export function useFetchPokemonInfo(
  pokemon: Pokemon,
  pokemonRepository: PokemonRepository
) {
  return useQuery(`pokemon_info_${pokemon.name}`, () =>
    pokemonRepository.findByName(pokemon.name)
  );
}
