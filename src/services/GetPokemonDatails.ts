import axios from "axios";
import { PokemonDatail } from "../interfaces/PokemonDatail";

export async function GetPokemonDatails(name: string): Promise<PokemonDatail> {

  const endpoint = `${process.env.REACT_APP_POKEAPI}/pokemon/${name}`;

  const response = await axios.get<PokemonDatail>(endpoint);

  return response.data;

}