import { useState } from 'react'
import InputBox from './InputBox';
import TodoList from './TodoList';
import '../App.css';

function Todo() {
    const [todo, setTodo] = useState([]);
    const [notification, setNotification] = useState('');

    const addTodo = (value) => {
      // make the notification
      const newTodo = [...todo]
      newTodo.push(
        {
          todo:value,
          id:value
        }
      )
      setTodo(newTodo);
      createNotify(`${value} added successfully`)
    }

    const createNotify = (value) =>{
      setNotification(value);
      setTimeout(()=>{
        setNotification('');
      },5000)
    }

    const deleteTodoById = (id) => {
      const newTodo = todo.filter((item) => item.id !== id);
      const value = todo.find((item) => item.id === id).todo;
      createNotify(`${value} deleted successfully`)
      setTodo(newTodo);
      
    }

    return (
        <>
        {
          notification && <p className='red'>{notification}</p>
        }
        <InputBox addList={addTodo} />
        <TodoList todo={todo} deleteTodo={deleteTodoById}/>
    </>
    )
}

export default Todo
