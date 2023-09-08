import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Main from "./Pages/Main.js";
import Videos from "./Pages/Videos";
import Collection from "./Pages/Collection";
import Collections from "./Pages/Collections";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch(
      "https://docs.google.com/document/d/e/2PACX-1vTZf_OeVqmu0idRWJAEnFPWPuanVDI7V_euMioMTUvIsJMc6Kne2w1k5y6XKnURjGZPoMyH1CWghbPP/pub"
    )
      .then((res) => res.body.getReader())
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/collections">
            <Collections />
          </Route>
          <Route path="/videos">
            <Videos />
          </Route>
          <Route path="/collection/:name" component={Collection} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
