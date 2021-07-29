import React from 'react';
import 'antd/dist/antd.css';
import Input from'./input'
import './Tabela.css'
import { Table } from 'antd';
import Button from "../Layout/Button";
import {Link} from 'react-router-dom';

    export const columns = [
        {
          title: 'ASSUNTO',
          dataIndex: 'Assunto',
          width: 130,
          height:10
        },
        {
          title: 'Numero do Processo',
          dataIndex: 'Num_Processo',
          width: 130,
          height:10
        },
        {
          title: 'Minima duração do processo',
          dataIndex: 'Minima_Processo',
          width: 130
        },
        {
            title: 'Média duração do processo',
            dataIndex: 'Media_Processo',
            width: 130
        },  
        {
        title: 'Máxima duração do processo',
        dataIndex: 'Maxima_Processo',
        width: 130
        },  
        {
        title: 'Numero de eventos',
        dataIndex: 'Num_Eventos',
        width: 130
        },
        {
            title: 'Minimo nº de Eventos',
            dataIndex: 'Minima_Evento',
            width: 130
        },
        {
            title: 'Médio nº de eventos',
            dataIndex: 'Media_Evento',
            width: 130
        },
        {
            title: 'Maximo nº de Eventos',
            dataIndex: 'Maxima_Evento',
            width: 130
        },

      ];

export const data = [];{
 
    data.push(
        {
          key: 1,
          Assunto:  <a>`NOTA FISCAL - SELAGEM`</a>,
          Num_Processo: 620148,
          Minima_Processo: 0.00,
          Media_Processo: 53.17,
          Maxima_Processo: 1158.92 ,
          Num_Eventos:4029140,
          Minima_Evento: 2,
          Media_Evento: 6.50,
          Maxima_Evento:1280,
          Categoria:'notaFiscal',
          Ano:2020,
        },
        {
          key: 2 ,
          Assunto: <a> "NOTA FISCAL - CORREÇÃO"</a> ,
          Num_Processo: 230047 ,
          Minima_Processo: 0.00 ,
          Media_Processo: 161.89,
          Maxima_Processo: 1492.00,
          Num_Eventos:1584757,
          Minima_Evento: 1,
          Media_Evento: 6.89,
          Maxima_Evento:347,
          Categoria:'notaFiscal',
          Ano:2020,
        },
        {
          key: 3,
          Assunto:  <a>`AUTORIZAÇÃO E EMISSÃO NFC-E LIMITE 250.000,00`</a>,
          Num_Processo: 20793,
          Minima_Processo: 0.00,
          Media_Processo: 35.59,
          Maxima_Processo: 498.59,
          Num_Eventos:160689 ,
          Minima_Evento:3,
          Media_Evento: 7.75,
          Maxima_Evento:34,
          Categoria:'Emissao',
          Ano:2020,
        },
        {
          key: 4,
          Assunto:  <a>`NOTA FISCAL - SELAGEM`</a>,
          Num_Processo: 620148,
          Minima_Processo: 0.00,
          Media_Processo: 53.17,
          Maxima_Processo: 1158.92 ,
          Num_Eventos:4029140,
          Minima_Evento: 2,
          Media_Evento: 6.50,
          Maxima_Evento:1280,
          Categoria:'notaFiscal',
          Ano:2021,
        },
        {
          key: 5 ,
          Assunto: <a> "NOTA FISCAL - CORREÇÃO"</a> ,
          Num_Processo: 230047 ,
          Minima_Processo: 0.00 ,
          Media_Processo: 161.89,
          Maxima_Processo: 1492.00,
          Num_Eventos:1584757,
          Minima_Evento: 1,
          Media_Evento: 6.89,
          Maxima_Evento:347,
          Categoria:'notaFiscal',
          Ano:2021,
        },
        {
          key: 6,
          Assunto:  <a>`AUTORIZAÇÃO E EMISSÃO NFC-E LIMITE 250.000,00`</a>,
          Num_Processo: 20793,
          Minima_Processo: 0.00,
          Media_Processo: 35.59,
          Maxima_Processo: 498.59,
          Num_Eventos:160689 ,
          Minima_Evento:3,
          Media_Evento: 7.75,
          Maxima_Evento:34,
          Categoria:'Emissao',
          Ano:2021,
        }
    )
      
}

function onRow ({record, rowIndex}) {
  return {
    onClick: event => {}, // click row
    onDoubleClick: event => {}, // double click row
    onContextMenu: event => {}, // right button click row
    onMouseEnter: event => {}, // mouse enter row
    onMouseLeave: event => {}, // mouse leave row
  };
}
function onHeaderRow({columns, index}) {
  return {
    onClick: () => {}, // click header row
  };
}

export default (props)=>
<div className="Main">
    <div className="InputBar">
    <div className="Barra">  
    <Input>
    </Input>
    </div>
    <div className="Pesquisa">
    <Button item="Filtrar"></Button>
    </div>

  </div>
   

    
<section className="Tab"><Table columns={columns} dataSource={data} pagination={{ pageSize: 30 }} scroll={{ y:700 }}/></section>

<Link to ="/dashboard">
<div className="botaoDash">
<Button item="Gerar Dashboard" ></Button>
</div>
</Link>



  
</div>
