import { TASK_ITEMS_STORAGE_KEY } from "../../constants";
import useLocalStorage from "../../hooks/useLocalStorage";
import { TaskItem } from "../../types";
import TaskForm from "./elements/TaskForm";
import TaskList from "./elements/TaskList";
import "./styles/styles.css";

export default function TaskManager() {
  const [taskItems, setTaskItems] = useLocalStorage<TaskItem[]>(
    TASK_ITEMS_STORAGE_KEY,
    []
  );

  // update tasks on task submit
  const updateTasks = (task: TaskItem) => {
    setTaskItems([...taskItems, { ...task, id: Date.now().toString() }]);
  };

  // clears the tasks on clear button click
  const clearTasks = () => {
    setTaskItems([]);
  };

  return (
    <div className="task-manager">
      <TaskForm updateTaskList={updateTasks} />
      {false && <TaskList tasks={taskItems} clearTasks={clearTasks} />}
    </div>
  );
}
