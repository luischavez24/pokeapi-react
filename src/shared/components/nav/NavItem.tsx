import { PropsWithChildren } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export type NavItemProps = PropsWithChildren<{
  to: string;
}>;

export default function NavItem({ to, children }: NavItemProps) {
  let resolved = useResolvedPath(to);
  let isActive = useMatch({ path: resolved.pathname, end: true });
  return (
    <li>
      <Link
        to={to}
        className={`block px-4 py-2 rounded-md ${
          isActive ? "bg-red-100 text-red-700" : ""
        }`}
      >
        {children}
      </Link>
    </li>
  );
}
