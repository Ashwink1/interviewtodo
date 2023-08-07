
function TodoList({todo, deleteTodo}) {

  return (
    <>
        {
            Boolean(todo?.length) && todo.map((item) => {
                return (
                  <div key={item.id}>
                    <p>{item.todo}</p>
                    <button onClick={() => deleteTodo(item.id)}>Delete</button>
                  </div>
                )
            })
       }
    </>
  )
}

export default TodoList
