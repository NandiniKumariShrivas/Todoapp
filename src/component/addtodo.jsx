import React, { useState } from "react";


function AddTodo({handleAdd})
{
    const [text,setText]=useState("")
   
    //input function
       const handleChange= (ele) =>
      
       {
           setText(ele.target.value)
       };

       const handleClick=()=>
       {
        if(text==="")
        {
            alert("Please fill the Todo")
        }
        else{

            handleAdd(text)
            setText("")
        }
        
       }

       


    return (
        <div style={{justifyContent:"space-between", width:"50%", margin:"auto" ,display:"flex"}}>
            <div>
            <input 

                
                
                placeholder="Add new Todo Item"
                
                value={text} 
                onChange={handleChange}
                style={{width:"200px", height:"30px", borderRadius:"5px" ,border:"0px",textAlign:"center"}}
                />

            </div>
            <div>
            <button 
                style={{width:"100px", height:"32px", borderRadius:"5px" ,backgroundColor:"#34ebe8" ,border:"0px",color:"black" ,fontWeight:"600" ,marginLeft:"20px"}}
                onClick={handleClick}>Add Todo</button>

            </div>
               
               
            </div>

    )


}

export default AddTodo