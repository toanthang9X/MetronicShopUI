// const: chứa các hằng số cố định của dự án.
// actions: chứa các actions dùng để truyền vào hàm dispatch.
// reducers: chứa các reducers trong redux.
import { ADD_NEW_NOTE, REMOVE_NOTE, EDIT_NOTE } from "../const/index";
export const actAddNote = (content) => {
  return {
    type: ADD_NEW_NOTE,
    content,
  };
};