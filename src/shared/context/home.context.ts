import { createContext } from "react";
import { PokemonRepository } from "../../pokemon/repository/pokemon.repository";

export default createContext({} as { pokemonRepository: PokemonRepository });
