import React, { useEffect, useState } from "react"


const  TestFunctionalComponent =()=> {

    const [name, setName] =  useState ("asiri");   
    const [second, setSecond] =  useState ("");
    const [buttonClick, setButtonClick] =  useState (false);   

    useEffect(()=>{
        console.log("componentDidMount")
    },[])

    useEffect(()=>{
        console.log("name changed")
    },[name])

    useEffect(()=>{
        console.log("second changed")
    },[second])

    useEffect(()=>{
        setName("")
        setSecond("")
    },[buttonClick])

    const nameOnchange=(event)=>{
        setName(event.target.value);  
      }

      const secondOnchange=(event)=>{
        setSecond(event.target.value);  
      }
      console.log("render")
        return (
            <div>
                hello TestFunctional Component

            <label for="fname">First name:</label>
           <input type="text" id="fname" name="fname" value={name} onChange={nameOnchange}/>
           <label for="fname">secoend name:</label>
           <input type="text" id="fname" name="fname" value={second} onChange={secondOnchange}/>

           <button type="button" onClick={()=>setButtonClick(prev=>!prev)}>print button</button>
            </div>
        )
    }


export default TestFunctionalComponent


