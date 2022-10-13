export type TaskItem = {
  id?: string;
  details?: string;
  assignee?: string;
  dueDate?: string;
};

export type FormAction = {
  type: string;
  payload?: string;
};
