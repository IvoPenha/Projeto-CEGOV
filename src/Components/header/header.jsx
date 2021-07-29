import Avatar from './Avatar.jsx';
import "./header.css";
import React from 'react'
import dsgovce from 'cegov-antd'
import {Link} from 'react-router-dom';
import { Row, Col,Typography} from "antd";
    const { Input, Header } = dsgovce();
    const { Paragraph, Title } = Typography;

export default()=>
  
<>
<Header
          accessibility
          onClickAccessibility={(name) => console.log(name)}
          title="Nome do Sistema"
        >
          <Row
            className="example-header"
            gutter={8}
            align="middle"
            justify="space-between"
            style={{ width: '95%' }}
          >
            <Col>
              <Row justify="end" align="middle" >
                <Col >
                <Link to="/">
                  <img class="cegov-logo-gov-ce" src="https://i.ibb.co/xHgyJS0/image-removebg-preview.png" alt="logo Governo do Estado do Ceará"style={{ position: 'relative', top: -20 , left: 15, height: 100, width: 165}}/>
                </Link>
                

                
                </Col>
                <Col>
                  <div style={{ background: 'white', height: 32, width: 2, marginLeft: 15, marginRight: 15 }} />
                </Col>
                <Col >
                  <Title level={2} style={{ marginBottom: 0, color: 'white' }} >
                  Nome do Sistema
                  </Title>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Paragraph style={{ textAlign: 'end', color: 'white'}} >
                 <div style={{display:'inline-block', marginRight:7 }}>Bem vindo! </div>
                 <div style={{display:'inline-block'}}><Avatar></Avatar></div>
                   
                </Paragraph>
              </Row>
              <Row gutter={16} justify="end" align="middle">
                
              </Row>
            </Col>
          </Row>
        </Header>
            </>
  