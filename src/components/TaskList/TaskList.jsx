import { Task } from '../Task/Task';
import css from './TaskList.module.css';

export const TaskList = () => {
  const tasks = [];

  return (
    <ul className={css.list}>
      {tasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};