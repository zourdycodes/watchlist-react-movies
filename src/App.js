import "./App.css";
import Header from "./components/Header";
import WatchLists from "./components/WatchLists";
import Watched from "./components/Watched";
import Add from "./components/Add";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";

/**
 * you have to make sure that CONTEXT API is working
 * check out --> react dev tools
 */

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <WatchLists />
          </Route>

          <Route path="/watched">
            <Watched />
          </Route>

          <Route path="/add">
            <Add />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
