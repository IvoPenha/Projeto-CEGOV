import React,{Component} from 'react';
import './App.css';
import Routes from './Routes';

import dscegov from 'cegov-antd'
import Header from "./Components/header/header";
import MenuLateral from "./Components/MenuLateral/MenuLateral";
import 'antd/dist/antd.css';
import Footer from './Components/footer/Footer'
import Tabela from './Components/Table/Tabela'
import {navLink} from 'react-router-dom'
export default (props) =>
<>  
    <Routes/>  
    
    <div className="App">
                     
             

              
              <footer>
              <Footer />

              </footer>
            
           
    </div>
    </>

