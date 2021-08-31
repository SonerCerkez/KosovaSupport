import Home from "../pages/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function Default() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
