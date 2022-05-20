import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Main from "./Pages/Main.js";
import Videos from "./Pages/Videos";
import Photo from "./Pages/Photo.js";
import Collection from "./Pages/Collection";
import Collections from "./Pages/Collections";

function App() {
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
            <Videos videos={[]} />
          </Route>
          <Route path="/photo/:i">
            <Photo />
          </Route>
          <Route path="/collection/:name" component={Collection} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
