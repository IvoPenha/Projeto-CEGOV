import React,{Component} from 'react';
import MenuLateral from "../Components/MenuLateral/MenuLateral";
import 'antd/dist/antd.css';
import Tabela from '../Components/Table/Tabela'
import Header from "../Components/header/header";
import'./Home.css'


export default (props) =>
<>              
          <header>
          <Header></Header>
          </header>
                <span>
                  <div className="Lateral" style={{display:'inline-block'}}>
                    <MenuLateral></MenuLateral>

                  </div><div style={{display:'inline-block'}}><Tabela className="Table"></Tabela></div>
                      
                  
                  
                  </span>
</>