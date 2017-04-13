import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
// import reducer from './reducers/reducer.jsx';

// const store = createStore(
// 	reducer,
// 	applyMiddleware(thunk)
// )

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
