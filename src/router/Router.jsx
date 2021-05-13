import { Switch, Route } from "react-router-dom";
import { MyPage } from "../MyPage";
import { Page404 } from "../Page4040";
import { introRoutes } from "./introRoutes";
import { MonsterRoutes } from "./MonsterRoutes";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <MyPage />
      </Route>
      <Route
        path="/intro"
        render={({ match: { url } }) => (
          <Switch>
            {introRoutes.map((route) => {
              return (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}
                >
                  {route.children}
                </Route>
              );
            })}
          </Switch>
        )}
      />
      <Route
        path="/Monster"
        render={({ match: { url } }) => (
          <Switch>
            {MonsterRoutes.map((route) => {
              return (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}
                >
                  {route.children}
                </Route>
              );
            })}
          </Switch>
        )}
      />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};
