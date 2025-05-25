import React from 'react'
import Navbar from './components/Navbar';
import './App.css'
const { v4: uuidv4 } = require('uuid');
uuidv4();

function App() {
  const [todo, setTodo] = React.useState('');
  const [todos, setTodos] = React.useState([]);


  const handleAdd = () => {
    setTodos([...todos, {todo, isCompleted: false}]);
    setTodo('');
  }
  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleEdit = () => {
    
  }
  const handleDelete = () => {

  }

  return (
    <>
      <Navbar />
      <div className="w-11/12 mx-auto my-12 min-h-[70vh]">
        <div className='bg-violet-200 p-4 rounded-sm py-6'>
          <h1 className='text-2xl font-bold text-violet-950'>Welcome to iTask</h1>
          <p className='text-violet-950'>Your personal task management app</p>
          <div className="addTodo my-6">
            <h2 className='font-semibold text-xl'>Add a Todo</h2>
            <div className="flex gap-4 justify-between items-center">
              <input onChange={handleChange} value={todo} type="text" placeholder='Enter your task here' className='border px-4 py-1 border-violet-950 rounded-sm w-full' />
              <button onClick={handleAdd} className='bg-violet-950 text-white px-2 py-1 rounded-sm w-2/12 hover:bg-violet-800 transition-all duration-300'>Add Task</button>
            </div>
          </div>
          
          <h2 className='font-semibold text-xl'>Your Todos</h2>
          <div className="todos my-6">
            {todos.map(item=>{
              return (
                <div className='todo' key={todo}>
                  <div className='flex justify-between items-center bg-white p-2 rounded-sm shadow-md mb-2'>
                    <span className='text-violet-950 '>{item.todo}</span>
                    <div className='flex space-x-2'>
                      <button onClick={handleEdit} className="bg-violet-950 text-white py-1 px-3 rounded-sm hover:bg-violet-700 transition-all duration-100">Edit</button>
                      <button onClick={handleDelete} className='bg-red-500 text-white py-1 px-3 rounded-sm hover:bg-red-700 transition-all duration-300'>Delete</button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
