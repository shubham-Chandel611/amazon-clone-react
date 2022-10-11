import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import Home from './Home';
import Checkout from "./Checkout";

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route exact path="/checkout">
      <Header />
      <Checkout/>
      </Route>
      <Route exact path="/login">
      <h1>login</h1>
      </Route>
      <Route exact path="/">
      <Header />
     <Home/>
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
