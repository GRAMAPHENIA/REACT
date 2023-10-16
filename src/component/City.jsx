import React, { useState, useEffect } from "react";

function City() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [taskName, setTaskName] = useState("");

  useEffect(() => {
    // Actualizar las listas de tareas completadas y pendientes.
    const completed = tasks.filter((task) => task.completed);
    setCompletedTasks(completed);
  }, [tasks]);

  const addTask = () => {
    if (taskName) {
      setTasks([
        ...tasks,
        { id: tasks.length + 1, name: taskName, completed: false },
      ]);
      setTaskName("");
    }
  };

  const completeTask = (taskId) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId && !task.completed) {
          return { ...task, completed: true };
        }
        return task;
      })
    );
  };

  return (
    <div>
      <h1 className="titulo">Ciudad Tarea</h1>
      <div>
        <h2 className="tareas-pendientes-h2">
          Pendientes <span>(</span> {tasks.length - completedTasks.length}
          <span> )</span>
        </h2>
        <ul>
          {tasks
            .filter((task) => !task.completed)
            .map((task) => (
              <li key={task.id}>
                {task.name}
                <button className="boton" onClick={() => completeTask(task.id)}>
                  Completar
                </button>
              </li>
            ))}
        </ul>
      </div>
      <h2 className="tareas-completas-h2">
        Completas <span>(</span> {completedTasks.length} <span>)</span>
      </h2>
      <div className="tareas-completas">
        <ul>
          {completedTasks.map((task) => (
            <li key={task.id}>{task.name}</li>
          ))}
        </ul>
      </div>
      <div className="agregar-tarea">
        <input
          type="text"
          placeholder="Nueva tarea"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button onClick={addTask}>Agregar Tarea</button>
      </div>
    </div>
  );
}

export default City;
