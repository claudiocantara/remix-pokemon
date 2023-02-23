import { NavLink, Outlet } from "@remix-run/react";

export default function Cart() {
  return (
    <div>
      <h1> I'm the wrapper of cart's route</h1>

      <NavLink to="" style={{ marginRight: 10 }}>
        cart
      </NavLink>

      <NavLink to="address"> address </NavLink>

      <Outlet />
    </div>
  );
}
