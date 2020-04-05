import React, {Component} from 'react';
import Input from './components/input/partInput';
import Parts from './components/parts/parts';
import GetParts from './components/parts/getParts';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import store from './store';
import './App.css';


class App extends Component{
  render(){
    return(
      <Router>
        <Provider store={store}>
          <div className="App">
            <div>
              <Switch>
                <Route exact path="/" component={Input}/>
                <Route exact path="/parts/:id" component={GetParts}/>
              </Switch>
            </div>
          </div>
        </Provider>
      </Router>
    )
  }
}

export default App;
