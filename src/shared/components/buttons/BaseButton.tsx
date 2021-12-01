import { PropsWithChildren } from "react";

export default function BaseButton(props: PropsWithChildren<any>) {
  return (
    <button
      className="text-base font-medium rounded-lg px-4 py-2 bg-red-500 text-white"
      {...props}
    >
      {props.children}
    </button>
  );
}
