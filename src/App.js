import React, {Component} from 'react';
import './App.css';
import logo from "./pensamiento.svg";
import {Login} from "./components/Login";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import {TodoApp} from "./components/TodoApp";
import TodoDraw from "./components/TodoDraw";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: localStorage.getItem("isLoggedIn")
    }
    this.changeIsLoggedIn = this.changeIsLoggedIn.bind(this);
  }

  changeIsLoggedIn(){
    this.setState({ isLoggedIn : true });
    localStorage.setItem("isLoggedIn", true );
  }

  LoginView = () => (
      <Login changeIsLoggedIn={this.changeIsLoggedIn}/>
  );

  TodoAppView = () => (
      <TodoApp/>
  );

  render() {

    return (
        <Router>
          <div className="App">
            <TodoDraw nav={this.nav}/>
            <header className="App-header">
              <h1 className="App-title"> Task Planner </h1>
              <img src={logo} className="App-logo" alt="logo"/>
            </header>

            <div>
              <Route exact path="/" component={this.LoginView}/>
              <Route path="/todo" component={this.TodoAppView}/>
            </div>
          </div>
        </Router>
    );
  }
}
export default App;