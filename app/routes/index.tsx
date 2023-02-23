import { json } from "@remix-run/node";
import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import {
  useFetcher,
  useLoaderData,
  useRouteLoaderData,
} from "@remix-run/react";
import { type ChangeEvent, useEffect } from "react";

export async function action({ request }: ActionArgs) {
  return null;
}

export async function loader({ request, context }: LoaderArgs) {
  return json({ title: "Titulo" }, { status: 200 });
}

export default function Index() {
  const { title } = useLoaderData<typeof loader>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>{title}</h1>
    </div>
  );
}
