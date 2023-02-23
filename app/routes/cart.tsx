import { NavLink, Outlet } from "@remix-run/react";

export default function Cart() {
  return (
    <section className="container dark:text-white flex flex-col gap-x-2 justify-center items-center ">
      <h1> I'm the wrapper of cart's route</h1>

      <NavLink
        className="dark:text-sky-400 block"
        to=""
        style={{ marginRight: 10 }}
      >
        cart
      </NavLink>

      <NavLink className="dark:text-sky-400 block" to="address">
        address
      </NavLink>

      <Outlet />
    </section>
  );
}
