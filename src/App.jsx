import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import './App.css'
import { v4 as uuidv4 } from 'uuid'


function App() {
  const [todo, setTodo] = React.useState('');
  const [todos, setTodos] = React.useState([]);
  const [showFinished, setShowFinished] = useState(true);

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, []);
  

  const saveToLS = (todosToSave) => {
    localStorage.setItem("todos", JSON.stringify(todosToSave))
  }

  const toggleFinished = (e) => {
    setShowFinished(!showFinished)
  }
  
  const handleEdit = (e, id) => {
    const t = todos.filter(i => i.id === id);
    setTodo(t[0].todo);
    
    const newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
    saveToLS(newTodos);
  }
  
  const handleDelete = (e, id) => {
    console.log(`The id is ${id}`);
    const newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
    saveToLS(newTodos);
  }
  
  const handleAdd = () => {
    const newTodos = [...todos, {id: uuidv4(), todo, isCompleted: false}];
    setTodos(newTodos);
    setTodo('');
    saveToLS(newTodos);
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => { 
    let id = e.target.name;
    let index = todos.findIndex(item=>{
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
    saveToLS(newTodos);
   }

  return (
    <>
      <Navbar />
      <div className="w-11/12 mx-auto my-12 min-h-[70vh]">
        <div className='bg-violet-200 p-4 rounded-sm py-6'>
          <h1 className='text-2xl font-bold text-violet-950 text-center'>Welcome to iTask</h1>
          <p className='text-violet-950 text-center'>Your personal task management app</p>
          <div className="addTodo my-6">
            <h2 className='font-semibold text-xl mb-3'>Add a Todo</h2>
            <div className="flex gap-4 justify-between items-center">
              <input onChange={handleChange} value={todo} type="text" placeholder='Enter your task here' className='border px-4 py-1 border-violet-950 rounded-sm w-9/12 lg:w-full' />
              <button onClick={handleAdd} className='bg-violet-950 text-white px-2 py-1 rounded-sm w-4/12 lg:w-2/12 hover:bg-violet-800 transition-all duration-300 disabled:bg-voilet-700' disabled={todo.length<=3}>Save</button>
            </div>
          </div>
          <input type="checkbox" onChange={toggleFinished} checked={showFinished} /> Show Finished
          <h2 className='font-semibold text-xl'>Your Todos</h2>
          <div className="todos my-3">
            {todos.length === 0 && <div className='m-5'>No Todos to display </div>}
            {todos.map(item=>{
              return (showFinished || !item.isCompleted) && 
                <div className='todo' key={item.id}>
                  <div className='flex justify-between items-center bg-white p-2 rounded-sm shadow-md mb-2'>
                    <div className="flex gap-3">
                      <input id="" name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} />
                      <div className={item.isCompleted?"line-through":""}>
                        <span className='text-violet-950 '>{item.todo}</span>
                      </div>
                    </div>
                    <div className='flex space-x-2'>
                      <button onClick={(e)=>{handleEdit(e, item.id)}} className="bg-violet-950 text-white py-1 px-3 rounded-sm hover:bg-violet-700 transition-all duration-100">Edit</button>
                      <button onClick={(e)=>{handleDelete(e, item.id)}} className='bg-red-500 text-white py-1 px-3 rounded-sm hover:bg-red-700 transition-all duration-300'>Delete</button>
                    </div>
                  </div>
                </div>
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default App