import { Pokemon, Pokemons } from "@/types";

const POKEMON_API = "https://pokeapi.co/api/v2";

export async function getPokemon(id: string): Promise<Pokemon> {
  const response = await fetch(`${POKEMON_API}/pokemon/${id}`);
  const data = await response.json();
  return data;
}

export async function getPokemons(): Promise<Pokemons> {
  // only fetch the first 151 pokemons
  const response = await fetch(`${POKEMON_API}/pokemon?limit=151&offset=0`);
  const data = await response.json();
  return data;
}
