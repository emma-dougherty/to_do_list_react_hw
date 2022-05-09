import './App.css';
import React, {useState} from 'react';

function App() {
  
    const [todos, setToDos] = useState ([
      { name: "Buy Shopping", priority: "high" },
      { name: "Clean Bathroom", priority: "low" },
      { name: "Car's MOT", priority: "high"}
    ])
    const [newToDo, setNewToDo] = useState("")
    const [newPriority, setNewPriority] = useState ("")

    const itemNodes = todos.map((todo, index) => {
      return(
          <li key={index} className={todo.priority === "high" ? "high" : "low"}>

          <span>{todo.name}</span> 
          <span>{todo.priority}</span> 
  </li>
      )
    })
  

    const handlePriorityInput = (event) => {
      setNewPriority(event.target.value)
    }

    const handleToDoInput = (event) => {
      setNewToDo(event.target.value)
    }

    

    const saveNewToDo = ((event) => {
      event.preventDefault()
      const copyToDos = [... todos, ({name: newToDo, isPriority: newPriority})]
      
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


      
        <input type="radio" name="something" value="high" onChange={handlePriorityInput}/>
        <label for="high priority">high priority</label>
        <input type="radio" name="something" value="low" onChange={handlePriorityInput}/>
        <label for="low priority">low priority</label>
    

    

        <input type="submit" value="Save New To Do" />
      </form>
    </div>

  );
}

export default App;