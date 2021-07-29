import React from "react";
import {Typography,Col } from 'antd'
import Checkbox from "../Layout/Checkbox";
import Button from "../Layout/Button";
import './MenuLateral.css';

const {Title} = Typography;



export default(props)=>
<>
    <Col className="Subtitulo" >
        <Title level={3} style={{color:'#4e5e5d' }} >
        Indicadores do Sistema
        </Title>
        <Title level={4} style={{color:'#7c7c7c' }} >
        Agregar por:
        </Title>
    </Col>
    <div className="listaCheck">
                <ul>
                    <li><Checkbox item="Categoria" value="Categoria" ></Checkbox> </li>
                    <li><Checkbox item="Assunto" value="Assunto" ></Checkbox> </li>
                    <li><Checkbox item="Ano" value="Ano"></Checkbox> </li>
                    <li><Checkbox item="Responsável" value="Responsavel" ></Checkbox> </li>
                </ul>
            
    </div>
    <div className="Pesquisa" >
        <Button item="Pesquisar"></Button>

    </div>
</>