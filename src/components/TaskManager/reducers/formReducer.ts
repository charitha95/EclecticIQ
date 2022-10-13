import {
  ASSIGNEE_ACTION,
  CLEAR_ACTION,
  DETAILS_ACTION,
  DUEDATE_ACTION,
  INITIAL_FORM_STATE,
} from "../../../constants";
import { FormAction, TaskItem } from "../../../types";

/**
 * Reducer for the form related state
 * @param {TaskItem} state state of the reducer
 * @param {FormAction} action action of the reducer
 */
export default function formReducer(
  state: TaskItem,
  action: FormAction
): TaskItem {
  switch (action.type) {
    case DETAILS_ACTION:
      return {
        ...state,
        details: action.payload,
      };
    case ASSIGNEE_ACTION:
      return {
        ...state,
        assignee: action.payload,
      };
    case DUEDATE_ACTION:
      return {
        ...state,
        dueDate: action.payload,
      };
    case CLEAR_ACTION:
      return INITIAL_FORM_STATE;
    default:
      return state;
  }
}
