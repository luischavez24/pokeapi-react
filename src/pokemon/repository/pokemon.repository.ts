import { AxiosInstance } from "axios";
import { ApiPaginatedResponse } from "../../shared/models/api.models";
import { Pokemon, PokemonInfo } from "../models/pokemon.model";

export interface PokemonRepository {
  findAll(
    offset: number,
    limit: number
  ): Promise<ApiPaginatedResponse<Pokemon>>;

  findByName(name: string): Promise<PokemonInfo>;
}

export class ApiPokemonRepository implements PokemonRepository {
  constructor(private axios: AxiosInstance) {}
  async findAll(
    offset: number = 0,
    limit: number = 20
  ): Promise<ApiPaginatedResponse<Pokemon>> {
    const { data } = await this.axios.get<ApiPaginatedResponse<Pokemon>>(
      "/pokemon",
      {
        params: { offset, limit },
      }
    );

    return data;
  }

  async findByName(name: string): Promise<PokemonInfo> {
    const { data } = await this.axios.get<PokemonInfo>(`/pokemon/${name}`);
    return data;
  }
}
