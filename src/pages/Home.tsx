import axios from "../config/plugins/axios.plugin";

import { QueryClientProvider, QueryClient } from "react-query";
import { PokemonCollection } from "../pokemon/components/PokemonCollection";
import { ApiPokemonRepository } from "../pokemon/repository/pokemon.repository";
import HomeContext from "../shared/context/home.context";
const queryClient = new QueryClient();

export default function Index() {
  return (
    <HomeContext.Provider
      value={{ pokemonRepository: new ApiPokemonRepository(axios) }}
    >
      <div className="flex">
        <QueryClientProvider client={queryClient}>
          <PokemonCollection></PokemonCollection>
        </QueryClientProvider>
      </div>
    </HomeContext.Provider>
  );
}
