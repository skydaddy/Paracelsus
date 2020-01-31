import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Menu from './components/menu';
import Home from './pages/home';
import Philosophies from './pages/philosophies';
import About from './pages/about'

function App() {
  return (
    <div className="App">
      <Menu />
      <BrowserRouter>
        <Switch>
          <Route exact strict path="/home" render={() => <Home />} />
          <Route exact strict path="/philosophies" render={() => <Philosophies />} />
          <Route exact strict path="/about" render={() => <About />} />
          <Redirect from="/" to="/home" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
