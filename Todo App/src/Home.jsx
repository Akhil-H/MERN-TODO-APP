


import React, { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";
import { MdDeleteOutline, MdEdit } from "react-icons/md";


function Home() {
    const [todos, setTodos] = useState([]);
    const [first, setFirst] = useState();
   


   
    useEffect(() => {
        axios.get('http://localhost:3001/get')
            .then(result => setTodos(result.data)) // Corrected from result.date to result.data
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/delete/' + id)
            .then(result => {
                location.reload()
            })
            .catch(err => console.log(err))
    }


    

    



    return (
        <>
            <div><h2>ToDo List</h2></div>
            <Create />
            {
                todos.length === 0 ?
                    <div><h2>No Record</h2></div>
                    :
                    todos.map((todo, index) => ( // Added a unique key for each todo

                        <div className="task">
                            <div className="checkbox" >

                                <input type="checkbox" value={first} />
                                <div key={index}>
                                    {todo.task}
                                </div>
                            </div>
                           
                            <MdDeleteOutline onClick={() => handleDelete(todo._id)} />

                           

                        </div >
                    ))
            }
        </>
    );
}

export default Home;
