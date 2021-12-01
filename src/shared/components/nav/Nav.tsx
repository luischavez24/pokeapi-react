import { PropsWithChildren } from "react";

export type NavProps = PropsWithChildren<{}>;
export default function Nav({ children }: NavProps) {
  return (
    <nav className="p-4">
      <ul className="flex space-x-2">{children}</ul>
    </nav>
  );
}
