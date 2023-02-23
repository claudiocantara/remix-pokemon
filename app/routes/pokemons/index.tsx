import { json } from "@remix-run/node";
import {
  Form,
  Link,
  useCatch,
  useLoaderData,
  useSubmit,
} from "@remix-run/react";
import type { ActionArgs } from "@remix-run/node";
import { getPokemons } from "~/api/pokemon";

export async function loader() {
  const pokemons = await getPokemons();
  return json(pokemons);
}

const getPokemonId = (url: string): string => {
  return url.match(/\/(\d{1,})\//)?.[1] || "";
};
export default function Index() {
  const pokemons = useLoaderData<typeof loader>();

  return (
    <section className="container max-w-screen-xl mx-auto mt-4">
      <div className="container mx-auto">
        <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mx-2">
          {pokemons.results.map((pokemon) => (
            <li key={pokemon.name}>
              <div className="flex flex-col group bg-rose-50 p-5 text-center items-center rounded-lg dark:bg-slate-700">
                <h2 className="capitalize font-medium dark:text-white">
                  {pokemon.name}
                </h2>

                <picture>
                  <img
                    loading="lazy"
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonId(
                      pokemon.url
                    )}.png`}
                    height={96}
                    width={96}
                    className="group-hover:scale-110"
                    alt={pokemon.name}
                  />
                </picture>

                <Link
                  className="text-indigo-600 dark:text-sky-400"
                  to={getPokemonId(pokemon.url)}
                >
                  ver mais
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div>
      <h1>Error</h1>
      <p>{error.message}</p>
      <p>The stack trace is:</p>
      <pre>{error.stack}</pre>
    </div>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <div>
      <h1>Caught</h1>
      <p>Status: {caught.status}</p>
      <pre>
        <code>{JSON.stringify(caught.data, null, 2)}</code>
      </pre>
    </div>
  );
}
