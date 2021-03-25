import React from "react";
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import UserDetails from "./Components/UserDetails";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Users from "./Components/Users";
import { Provider } from "react-redux";
import { store } from "./redux/Store";

function App() {
  return (
    <div className="App">
        <Router>
          <NavBar/>
            <Provider store={store}>
            <Route component={Home} path="/" exact/>
            <Route component={Users} path="/users" exact/>
            <Route component={UserDetails} path="/user/:id" exact/>
          </Provider>
        </Router>
    </div>
  );
}

export default App;
