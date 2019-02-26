import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Login from './Login';
import Home from './Home';
import Register from './Register';
import Acc_mng from './Acc_mng';
import UserList from './UserList';
import Fuel_History from './Fuel_history';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/manage_account" exact component={Acc_mng} />
          <Route path="/userlist" exact component={UserList} />
          <Route path="/fuel_history" exact component={Fuel_History} />


        </div>
      </BrowserRouter>
    );
  }
}

export default App;