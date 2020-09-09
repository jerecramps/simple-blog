import { CREATE_BLOG, DELETE_BLOG, UPDATE_BLOG, SEARCH_BLOG, SORT_BLOG } from '../constants';

//
// import { CREATE_BLOG, DELETE_BLOG, UPDATE_BLOG, SEARCH_BLOG, SORT_BLOG, FETCH_BLOG } from '../constants';
// import API from '../utils/API';

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
  return action;
}

// export const fetchBlog = () => {
//
//   return async (dispatch) => {
//    const {data} = await API.get('/');
//    dispatch( {type: FETCH_BLOG, payload: data});
//   }
//   // let blogData = await API.get('/');
//   // const action = {
//   //   type: FETCH_BLOG,
//   //   payload: blogData
//   // }
//   // return action;
// }
