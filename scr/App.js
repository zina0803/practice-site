import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import { Router } from "./router/Router";
import { MyPage } from "./MyPage";
import { Page1 } from "./intro";
import { high } from "./high";
import { univ } from "./univ";
import { Monter } from "./Monster";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">MyPage</Link>
        <br />
        <Link to="/intro">Self-introduction</Link>
        <br />
        <Link to="/Monter">Monter</Link>
      </div>
      <Router />
    </BrowserRouter>
  );
}
