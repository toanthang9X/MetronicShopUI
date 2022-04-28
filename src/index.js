import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router} from "react-router-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";
import Reducer from "./reducers/cart";
// import Reducer from "./components/Reducer";
const store = createStore(Reducer);

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
  </Provider>,
  document.getElementById('root')
);


