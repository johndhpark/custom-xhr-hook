import { useState } from "react";
import NewTask from "./components/NewTask/NewTask";
import Tasks from "./components/Tasks/Tasks";
import useFetch from "./hooks/use-fetch";

const URL = "https://xhr-custom-hook-default-rtdb.firebaseio.com/tasks.json";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, error, memoizedFetchTasks] = useFetch(URL, setTasks);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={memoizedFetchTasks}
      />
    </>
  );
}

export default App;
