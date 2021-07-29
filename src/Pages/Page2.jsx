import react from 'react';
import card from "./Card.jsx";
import Header from "../Components/header/header";
import  Footer from "../Components/footer/Footer";
import { Chart, Bars } from 'rumble-charts';
import Table from "../Components/Table/Tabela"
import {Link} from 'react-router-dom';

import './Page2.css';
const series = [{
    data: [1, 2, 4]
}];

export default()=>
<>
<div className="Dash">
          <header>
          <Header></Header>
          </header>

          <div className="back">
          <Link to ="/">
          <h2>Voltar</h2>
         
          </Link> <h1 style={{color:'green'}}>Dashboard de indicadores de processo</h1> 
           
          </div>
            <article>
            <div className="left"></div>
            <Chart width={600} height={250} series={series} minY={0}>
          <Bars />
            </Chart>
            <div className="right">
            <Chart width={600} height={250} series={series} minY={0}>
          <Bars />
            </Chart>
            </div>
              </article>
            
             
</div>


</>