import { Fragment, useContext } from "react";
import { Pokemon } from "../models/pokemon.model";
import HomeContext from "../../shared/context/home.context";
import { useFetchPokemonInfo } from "../hooks/use-fetch-pokemon-info.hook";

export type PokemonCardProps = {
  pokemon: Pokemon;
};
export default function PokemonCard(props: PokemonCardProps) {
  const { pokemon } = props;
  const { pokemonRepository } = useContext(HomeContext);

  const { isLoading, error, data: pokemonInfo } = useFetchPokemonInfo(
    pokemon,
    pokemonRepository
  );

  if (isLoading) return <span>Loading...</span>;

  if (error) return <span>An error has occurred: {JSON.stringify(error)}</span>;

  return (
    <div
      className="flex flex-col items-center bg-gray-100 rounded-xl p-8"
      role="listitem"
    >
      <div className="text-lg font-medium capitalize mb-2">{pokemon.name}</div>
      <div className="flex items-center justify-center">
        {pokemonInfo?.types.map((type, index, items) => (
          <Fragment key={index}>
            <img
              className="w-10"
              src={`https://veekun.com/dex/media/types/en/${type.type.name}.png`}
              alt={type.type.name}
            />
            {index < items.length - 1 ? <span className="mx-1"></span> : ""}
          </Fragment>
        ))}
      </div>
      <img
        className="w-36"
        src={pokemonInfo?.sprites.other?.home.front_default}
        alt={pokemon.name}
      ></img>
      <div className="flex flex-wrap">
        <div>Weight: {pokemonInfo?.weight}</div>
        <div>Heigth: {pokemonInfo?.height}</div>
      </div>
    </div>
  );
}
