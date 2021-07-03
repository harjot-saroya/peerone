import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

import {Switch, Route, BrowserRouter } from "react-router-dom";

import Blog from "./components/blog/blog";
import Flyer from "./components/flyer/index.js";

const routing = (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/blog" component={Blog} />
        <Route path="/flyer" component={Flyer} />
      </Switch>
    </div>
  </BrowserRouter>
);
ReactDOM.render(routing, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
