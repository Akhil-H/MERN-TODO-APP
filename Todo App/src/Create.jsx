import React, { useState } from "react";
import axios from 'axios'
function Create(){
    const [task, setTask]=useState()
    const handleAdd=()=>{

        axios.post('http://localhost:3001/add',{task:task})
        .then(result=>{
            location.reload()
        })
        .catch(err=>console.log(err))

    }
    return (
        <div className="inputbox">
                <input type="text" placeholder="Entre Your Todo" className="todoinput" onChange={(e)=>setTask(e.target.value)} />
                <button type="button" className="btn" onClick={handleAdd} >Add</button>
        </div>
        
    )
    console.log(task);
}
export default Create