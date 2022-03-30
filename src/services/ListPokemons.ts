import axios from "axios";
import { PokemonDatail } from "../interfaces/PokemonDatail";

import { GetPokemonDatails } from "./GetPokemonDatails";

export interface PokemonListInterface {
  name: string;
  url: string;
}

interface ListPokemonsInterface {
  count: number;
  next: null | string;
  previus: null | string;
  results: Array<PokemonDatail>;
}

export async function ListPokemons(): Promise<ListPokemonsInterface> {

  const endpoint = `${process.env.REACT_APP_POKEAPI}/pokemon`;

  const response = await axios.get<ListPokemonsInterface>(endpoint);

  const promisseArr = response.data.results.map(({ name }) => GetPokemonDatails(name));

  const resultsPromise = await Promise.all(promisseArr);

  return {
    ...response.data,
    results: resultsPromise
  }

}