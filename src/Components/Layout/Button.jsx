import React from 'react'
import {Button } from 'antd'




export default(props)=>
<>
        
        <Button type="submit" style={{ background:'rgb(0, 184, 148)' ,borderRadius:10, height:40}}>
                    <h3 style={{color:'white',align:'center'}}>{props.item}</h3>
        </Button>
</>