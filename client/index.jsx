import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Popular from './components/Popular.jsx';
import Genre from './components/Genre.jsx';
import Login from './components/login.jsx';
import Register from './components/register.jsx';
import GenreCustom from './components/GenreCustom.jsx';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers/reducer.jsx';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import createBrowserHistory from 'history/createBrowserHistory';

const reducers = combineReducers({
  reducer,
  routing: routerReducer
})

let store = createStore(
  reducers,
  applyMiddleware(thunk)
)

let history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
      <Router history={history}>
        <div>
          <Route exact path="/" component={App}/>
          <Route exact path="/popular" component={Popular}/>
          <Route exact path="/genre" component={Genre}/>
          <Route path="/genre/:genreCustom" component={GenreCustom}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
        </div>
      </Router>
  </Provider>,
  document.getElementById('root')
);

export function storeAction(action) {
  store.dispatch(action);
}