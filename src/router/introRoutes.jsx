import { intro } from "../intro";
import { high } from "../high";
import { univ } from "../univ";

export const Page1Routes = [
  {
    path: "/",
    exact: true,
    children: <intro />
  },
  {
    path: "/high",
    exact: false,
    children: <high />
  },
  {
    path: "/univ",
    exact: false,
    children: <univ />
  }
];