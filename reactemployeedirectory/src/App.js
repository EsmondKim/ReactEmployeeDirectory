//import logo from './logo.svg';
import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import About from "./pages/About.js";
import Search from "./pages/Search.js";
import NavTabs from "./components/NavBar/NavBar.js";

function App() {
  return (
    <HashRouter>
      <NavTabs />
      <Route exact path="/ReactEmployeeDirectory" component={About} />
      <Route exact path="/" component={About} />
      <Route exact path="/about" component={About} />
      <Route exact path="/search" component={Search} />
    </HashRouter>
  );
}

export default App;
