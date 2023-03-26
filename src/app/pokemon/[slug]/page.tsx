import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";

import { getPokemon, getPokemons } from "@/services/pokemon";

type Params = {
  params: {
    slug: string;
  };
};

export default async function Pokemon({ params }: Params) {
  const { slug } = params;
  // magic strikes again
  const pokemon = await getPokemon(slug);

  const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`;

  return (
    <div>
      <Link href="/">Home</Link>
      <h1>{pokemon?.name}</h1>
      <Image
        width={400}
        height={400}
        src={sprite}
        alt={pokemon?.name}
        priority
      />
    </div>
  );
}

export async function generateStaticParams() {
  const res = await getPokemons();

  return res.results.map((pokemon) => ({
    slug: pokemon.name,
  }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const pokemon = await getPokemon(params.slug);

  return {
    title: `${pokemon.name} | Next.js + Pokemon`,
    description: `${pokemon.name} | Next.js + Pokemon`,
    openGraph: {
      title: `${pokemon.name} | Next.js + Pokemon`,
      description: `${pokemon.name} | Next.js + Pokemon`,
      images: [
        {
          url: pokemon.sprites.front_default,
          width: 400,
          height: 400,
          alt: pokemon.name,
        },
      ],
    },
  };
}
