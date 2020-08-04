import { CREATE_BLOG, DELETE_BLOG, UPDATE_BLOG } from '../constants';

export const createBlog = (title, content, datecreated) => {
  const action = {
    type: CREATE_BLOG,
    title: title,
    content: content,
    datecreated: datecreated
  }
  return action;
}


export const deleteBlog = (id) => {
  const action = {
    type: DELETE_BLOG,
    id
  }

  return action;
}

export const updateBlog = (id, title, content, datecreated) => {
  const action = {
    type: UPDATE_BLOG,
    id: id,
    title: title,
    content: content,
    datecreated: datecreated
  }
  return action;
}
