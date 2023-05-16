import React,{ useState } from "react"
import AddTodo from "./addtodo"
import TodoItem from "./TodoItem"







function Todo()
{
   

     // /button funtion that help to add new item in the todo list
    const [todos,setTodos]=useState([])
    const handleAdd=(text)=>
   
    {
// alert("yes I am add")
const todoList =
{
    id:Date.now()+Math.random()+text,
    title:text,
    status:false
}
// what is spread operator
const afterAddInTheList=[...todos,todoList]
setTodos(afterAddInTheList)
// empty the input box
// setText("")


    }




    function  handleUpdate(id)
{
    
    const afterUpdateTheItem = todos.map((todo)=>
    todo.id=== id ? { ...todo,status : !todo.status} : todo
    )

    setTodos( afterUpdateTheItem)
}



const handleDelete=(id)=>
{
    const deleteRows=todos.filter((todo)=>todo.id!==id)
    setTodos(deleteRows)

}
    return (
        <div border="2px soild red" >
            {/* <div>
                <input 
                placeholder="Add new Todo Item"
                value={text} 
                onChange={handleChange}
                />
                <button onClick={handleAdd}>Add Todo</button>
            </div> */}

            
            <AddTodo 
              handleAdd={handleAdd}
           />
            {todos.map((todo)=>(
                 <TodoItem 
                 key={todo.id} 
                 title={todo.title } 
                 status={ todo.status} 
                 id={todo.id}
                 handleClick={ handleUpdate}
                 handleDelete={handleDelete}
                
                 />
       
       ))}
           


        </div>

    )
}
export default Todo


