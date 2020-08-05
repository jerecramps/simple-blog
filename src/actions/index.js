import { CREATE_BLOG, DELETE_BLOG, UPDATE_BLOG, SEARCH_BLOG, SORT_BLOG } from '../constants';

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

export const searchBlog = (search) => {
  const action = {
    type: SEARCH_BLOG,
    search: search
  }
  return action;
}

export const sortBlog = (sortBy) => {
  const action = {
    type: SORT_BLOG,
    sortBy: sortBy
  }
  console.log(action);
  return action;
}
