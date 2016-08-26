import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as API from './util/api_util';
import * as ACTIONS from './actions/pokemon_actions';



const store = configureStore();

window.store = store;

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(
    <Root store={store} />, root);
});
