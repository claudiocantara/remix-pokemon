import { type LoaderArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPokemon } from "~/api/pokemon";

export async function loader({ request, params }: LoaderArgs) {
  const id = params.pokemonId;

  // Todo add validation
  const pokemon = await getPokemon(parseInt(id ?? "1"));

  return json(pokemon);
}

export default function () {
  const pokemon = useLoaderData<typeof loader>();
  return (
    <div>
      <div className="flex flex-col">
        <h2 className="capitalize"> {pokemon.name} </h2>

        <picture>
          <img
            loading="lazy"
            src={pokemon.sprites.front_default}
            height={96}
            width={96}
            alt={pokemon.name}
          />
        </picture>
        <picture>
          <img
            loading="lazy"
            src={pokemon.sprites.back_default}
            height={96}
            width={96}
            alt={pokemon.name}
          />
        </picture>
      </div>
    </div>
  );
}
