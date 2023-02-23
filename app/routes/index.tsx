import { json } from "@remix-run/node";
import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { NavLink, useLoaderData } from "@remix-run/react";

export async function action({ request }: ActionArgs) {
  return null;
}

export async function loader({ request, context }: LoaderArgs) {
  return json({ title: "Aplicação de testes" }, { status: 200 });
}

export default function Index() {
  const { title } = useLoaderData<typeof loader>();

  return (
    <section className="container dark:text-white flex flex-col gap-x-2 justify-center items-center">
      <h1 className="text-lg py-3">{title}</h1>
      <div className="text-center">
        <NavLink to={"/pokemons"} className="dark:text-sky-400 block">
          Pokemon app
        </NavLink>
        <NavLink to={"/cart"} className="dark:text-sky-400">
          Cart app
        </NavLink>
      </div>
    </section>
  );
}
