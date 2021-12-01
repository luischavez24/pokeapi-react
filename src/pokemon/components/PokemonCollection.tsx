import { useContext, useEffect, useState } from "react";
import { useFetchPokemons } from "../hooks/use-fetch-pokemons.hook";

import BaseButton from "../../shared/components/buttons/BaseButton";
import PokemonCard from "./PokemonCard";
import HomeContext from "../../shared/context/home.context";

export type PokemonCollectionProps = {};

export function PokemonCollection(props: PokemonCollectionProps) {
  
  const { pokemonRepository } = useContext(HomeContext)

  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);

  useEffect(() => {
    setOffset(0);
    setLimit(12);
  }, []);

  const { data, isLoading, error } = useFetchPokemons(
    offset,
    limit,
    pokemonRepository
  );

  if (isLoading) return <span role="progressbar">Loading...</span>;

  if (error) return <span>An error has occurred: {JSON.stringify(error)}</span>;

  return (
    <div className="flex flex-col px-10 py-8 h-full w-full">
      <div className="flex justify-start mb-8">
        <h1 className="flex font-medium text-5xl">Pokedex</h1>
      </div>
      <div role="list" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {data?.results.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            pokemon={pokemon}
          ></PokemonCard>
        ))}
      </div>
      <div className="flex justify-end mt-8">
        <BaseButton
          onClick={() => {
            setOffset(offset - limit);
          }}
        >
          Previous
        </BaseButton>
        <span className="mx-2"></span>
        <BaseButton
          onClick={() => {
            setOffset(offset + limit);
          }}
        >
          Next
        </BaseButton>
      </div>
    </div>
  );
}
