import React, { useState } from "react";
import useFetch from "../src/hooks/use-fetch";
import NewTask from "./components/NewTask/NewTask";
import Tasks from "./components/Tasks/Tasks";
const URL = "https://xhr-custom-hook-default-rtdb.firebaseio.com/tasks.json";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, error, memoizedFetchTasks] = useFetch(URL, setTasks);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={memoizedFetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
