import './App.css';
import React, {useState} from 'react';

function App() {
  
    const [todos, setToDos] = useState ([
      { name: "Buy Shopping", isCompleted: false, isPriority: "high" },
      { name: "Clean Bathroom", isCompleted: true, isPriority: "low" },
      { name: "Car's MOT", isCompleted: false, isPriority: "high"}
    ])
    const [newToDo, setNewToDo] = useState("")

    const itemNodes = todos.map((todo, index) => {
      return(
          <li key={index} className={todo.isComplete ? "completed" : "not-completed"}>
          <span>{todo.name}</span> 
  
          {todo.isPriority ? "high" : "low"}

          {todo.isCompleted ? <span className="completed">Completed!</span> : <button onClick={() => completeToDo(index)}>Complete</button>}</li>
      )
    })
    const completeToDo = ((index) => {
      const copyToDos = [... todos]
      copyToDos[index].isCompleted = true
      setToDos(copyToDos)
    })
    const handleToDoInput = (event) => {
      setNewToDo(event.target.value)
    }

    

    const saveNewToDo = ((event) => {
      event.preventDefault()
      const copyToDos = [... todos, ({name: newToDo, isCompleted: false, isPriority: "low"})]
      
      setToDos(copyToDos)
      setNewToDo("")
    })

    return (
      <div className="App">
      <h1>To Dos</h1>
      <hr></hr>
      <ul>
        {itemNodes}
      </ul>
      <form onSubmit={saveNewToDo}>
      <label htmlFor="new-todo">Add a new To Do:</label>
        <input id="new-todo" 
        type="text" onChange={handleToDoInput} 
        value={newToDo}/>

    

        <input type="submit" value="Save New To Do" />
      </form>
    </div>

  );
}

export default App;
