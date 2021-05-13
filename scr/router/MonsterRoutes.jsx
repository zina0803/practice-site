import { Monster } from "../Monster";
import { pipeline } from "../pipeline";
import { khaos } from "../khaos";

export const MonsterRoutes = [
  {
    path: "/",
    exact: true,
    children: <Monster />
  },
  {
    path: "/:id",
    exact: false,
    children: <pipeline />
  }
];
