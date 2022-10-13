import { TaskItem } from "../types";

export const FORM_STORAGE_KEY = "form-data";

export const TASK_ITEMS_STORAGE_KEY = "task-items";

export const INITIAL_FORM_STATE: TaskItem = {
  details: "",
  assignee: "",
  dueDate: "",
};

export const DETAILS_ACTION = "details";

export const ASSIGNEE_ACTION = "assignee";

export const DUEDATE_ACTION = "dueDate";

export const CLEAR_ACTION = "clear";
