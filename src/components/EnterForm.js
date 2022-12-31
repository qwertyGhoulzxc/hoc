import React, {useState} from 'react';
import styled from "styled-components";
import Input from "./Input";
const Form = styled.form`
width: 200px;
  border: 1px solid black;
  
`
const obj={}
const withFormProps=(obj,Component)=>{
    return (props)=>{

        return <Component {...props} data={obj} ></Component>
    }


}


const EnterForm = () => {
const [clickChange,setClickChange]= useState(true)

    const HandleClick= (e)=>{
        e.preventDefault()
        setClickChange(!clickChange)

    }




    return (
        <Form>
<Input id='Name' data={obj}  />
<Input id='Email' data={obj}  />
<Input id='Password' data={obj} />

            <button onClick={HandleClick}>click</button>
        </Form>
    );
};

export default withFormProps(obj ,EnterForm);