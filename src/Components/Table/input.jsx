import React from 'react';
import 'antd/dist/antd.css';
import { Select, Tag } from 'antd';
var i=0;
if (Tag) {
    
}
    const options = [
        { value: 'Categoria'   }, 
        { value: 'Assunto' }, 
        { value: 'Ano' }, 
        { value: 'Responsavel' },
        {value: '='},
        {value: '!='},       
    ];


    



function tagRender(props) {
  const { label, value, closable, onClose,onChange } = props;
  const onPreventMouseDown = event => {
    event.preventDefault();
    event.stopPropagation();
  };
  
  return (
    <Tag
      color={'green'}
      size="small"
      align="center"
      onMouseDown={onPreventMouseDown}
    
      closable={closable}
      onClose={onClose}
      style={{ marginRight: 2 }}
      
    >
      {label}
    </Tag>
  );
}

export default(props)=>
  <Select
    mode="multiple"
    showSearch
    placeholder="Concatenar com:"
    tagRender={tagRender}
    label="Concatenar Com"
    style={{ width: '100%'}}
    options={options}
  />