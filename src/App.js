import React, {Component} from 'react';
import './App.css';
import logo from "./pensamiento.svg";
import {Login} from "./components/Login";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import TodoDraw from "./components/TodoDraw";
import TodoCard from "./components/TodoCard";


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

  TodoCardView = () => (
      <main className="layout">
        <div className="paper">
          <TodoCard/>
        </div>
      </main>
  );

  render() {

    return (
        <Router>
          <div className="App">
            <TodoDraw/>
            <header className="App-header">
              <h1 className="App-title"> Task Planner </h1>
              <img src={logo} className="App-logo" alt="logo"/>
            </header>

            <div>
              <Route exact path="/" component={this.LoginView}/>
              <Route path="/todo" component={this.TodoCardView}/>
            </div>
          </div>
        </Router>
    );
  }
}
export default App;