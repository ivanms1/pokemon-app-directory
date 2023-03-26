import Image from "next/image";
import Link from "next/link";

import { getPokemons } from "@/services/pokemon";

const SPRITE_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

export default async function Page() {
  // this magic here
  const results = await getPokemons();

  return (
    <div>
      <div>
        {results.results?.map((pokemon, index) => (
          <Link href={`/pokemon/${pokemon.name}`} key={pokemon.name}>
            <Image
              alt={pokemon.name}
              width={100}
              height={100}
              src={`${SPRITE_URL}/${index + 1}.png`}
            />
            <p>{pokemon.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export const metadata = {
  title: "Trying the new app folder",
  description: "Pokemon app made with Next.js",
};
