import React, {useState} from 'react';
import styled from "styled-components";
const RegInput = styled.input`
width: 150px;
  border: red solid 1px;
  border-radius: 6px;
  outline: none;
`



// const withInputProps=(Component)=>{
//     return (props)=>{
// const [propsData,setPropsData]=useState()
//
//         return <Component {...props} objec={Obj} ></Component>
//     }
//
//
// }


const Input = ({id,data}) => {

    const handleChange = (e)=>{

        data[e.target.id]=e.target.value




    }

    return (
        <>
           <RegInput id={id} se={data} onChange={handleChange} />
        </>
    );
};

export default Input