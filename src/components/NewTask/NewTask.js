import usePost from "../../hooks/use-post";
import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const URL = "https://xhr-custom-hook-default-rtdb.firebaseio.com/tasks.json";

const NewTask = ({ onAddTask }) => {
  const [isLoading, error, enterTask] = usePost(URL, onAddTask);

  return (
    <Section>
      <TaskForm onEnterTask={enterTask} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
