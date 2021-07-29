import React,{Component} from 'react';

import {BrowserRouter, Route, Switch } from 'react-router-dom';
import home from "./Pages/Home";
import App from './App'
import Page2 from './Pages/Page2'
export default () =>{
    return (
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component = {home}></Route>
            
          <Route path ="/dashboard" component={Page2}></Route>   
        </Switch>
        </BrowserRouter>
    );
    }