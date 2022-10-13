import { FormEvent, useEffect, useReducer } from "react";
import { TaskItem } from "../../../types";
import {
  ASSIGNEE_ACTION,
  CLEAR_ACTION,
  DETAILS_ACTION,
  DUEDATE_ACTION,
  FORM_STORAGE_KEY,
  INITIAL_FORM_STATE,
} from "../../../constants";
import useLocalStorage from "../../../hooks/useLocalStorage";
import formReducer from "../reducers/formReducer";
import { clearStorage } from "../../../utils/localStorageHelper";

type TaskFormProps = {
  updateTaskList: (state: TaskItem) => void;
};

export default function TaskForm({ updateTaskList }: TaskFormProps) {
  const [taskItem, setTaskItem] = useLocalStorage<TaskItem>(
    FORM_STORAGE_KEY,
    INITIAL_FORM_STATE
  );

  const [state, dispatch] = useReducer(formReducer, taskItem);

  // handles the tab/browser close events and save data to LS
  useEffect(() => {
    const handleTabClose = () => {
      setTaskItem(state);
    };

    window.addEventListener("beforeunload", handleTabClose);

    // cleanup function: removes the listner
    return () => {
      window.removeEventListener("beforeunload", handleTabClose);
    };
  }, [setTaskItem, state]);

  // handles the form submition
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateTaskList(state);
    clearStorage(FORM_STORAGE_KEY);
    dispatch({
      type: CLEAR_ACTION,
    });
  };

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <legend>Create new task</legend>
      <div>
        <label htmlFor="details">Details</label>
        <input
          type="text"
          name="details"
          id="details"
          value={state.details}
          onChange={(e) =>
            dispatch({
              type: DETAILS_ACTION,
              payload: e.target.value,
            })
          }
        />
      </div>

      <div>
        <label htmlFor="assignee">Assignee</label>
        <select
          name="assignee"
          id="assignee"
          value={state.assignee}
          onChange={(e) =>
            dispatch({
              type: ASSIGNEE_ACTION,
              payload: e.target.value,
            })
          }
        >
          <option value=""></option>
          <option value="Joep">Joep</option>
          <option value="Raymon">Raymon</option>
        </select>
      </div>

      <div>
        <label htmlFor="dueDate">Due date</label>
        <input
          type="date"
          name="dueDate"
          id="dueDate"
          value={state.dueDate}
          onChange={(e) =>
            dispatch({
              type: DUEDATE_ACTION,
              payload: e.target.value,
            })
          }
        />
      </div>

      <div>
        <button type="submit">Save</button>
      </div>
    </form>
  );
}
