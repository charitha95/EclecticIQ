import { TaskItem } from "../../../types";

type TaskListProps = {
  tasks: TaskItem[];
  clearTasks: () => void;
};

export default function TaskList({ tasks, clearTasks }: TaskListProps) {
  return (
    <section className="task-list">
      <legend>Tasks</legend>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.details} - {task.assignee} - {task.dueDate}
          </li>
        ))}
      </ul>
      {tasks.length > 0 && <button onClick={clearTasks}> Clear</button>}
    </section>
  );
}
