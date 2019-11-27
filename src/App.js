import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from "./pages/About";
import Shop from "./pages/Shop";
import Home from "./pages/Home";
import ItemDetail from "./pages/ItemDetail";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Nav/>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/shop' exact component={Shop}/>
                    <Route path='/shop/:id' component={ItemDetail}/>
                </Switch>
            </div>
        </Router>

    );
}

export default App;
