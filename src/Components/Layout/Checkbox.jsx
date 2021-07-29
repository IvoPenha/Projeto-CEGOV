import React from 'react';
import 'antd/dist/antd.css';
import { Checkbox, Row, Col,Typography } from 'antd';
const {Title} = Typography;
function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}
export default(props)=>
<>
  <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
    <Row>
      <Col>
        <Checkbox value={props.value} style={{padding:5}}>
            <Title level={5} style={{color:'#4e5e5d' , padding:5, align:'right' }} >
                {props.item}
            </Title>
        </Checkbox>
      </Col>
     
    </Row>
  </Checkbox.Group>
  </>
