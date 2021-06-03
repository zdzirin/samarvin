import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; 
import { photos } from "./javascript/photos";

// Pages
import Main from './Pages/Main.js'
import Photos from './Pages/Photos.js'

function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Main photos={photos} />
          </Route>
          <Route path="/photos">
            <Photos photos={photos} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
