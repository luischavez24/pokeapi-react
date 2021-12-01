import { useQuery } from "react-query";
import { PokemonRepository } from "../repository/pokemon.repository";

export function useFetchPokemons(
  offset: number,
  limit: number,
  pokemonRepository: PokemonRepository
) {
  const { isLoading, error, data } = useQuery(["pokemon", offset, limit], () =>
    pokemonRepository.findAll(offset, limit)
  );

  return { isLoading, error, data };
}
