import { NavLink } from "@remix-run/react";

export default function Address() {
  return (
    <div className="text-center pt-4">
      <h2>I'm the address</h2>
      <span> what about go to nested route?</span>

      <NavLink
        className="dark:text-sky-400 block"
        to={"my-address-id-in-nested-route"}
      >
        /address/my-address-id-in-nested-route
      </NavLink>
    </div>
  );
}
