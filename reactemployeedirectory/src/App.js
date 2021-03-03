//import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About.js";
import Users from "./pages/Users.js";
import Search from "./pages/Search.js";
import NavTabs from "./components/NavBar/NavBar.js";

function App() {
  return (
    <Router>
      <NavTabs />
      <Route exact path="/ReactEmployeeDirectory" component={About} />
      <Route exact path="/" component={About} />
      <Route exact path="/about" component={About} />
      <Route exact path="/users" component={Users} />
      <Route exact path="/search" component={Search} />
    </Router>
  );
}

export default App;
