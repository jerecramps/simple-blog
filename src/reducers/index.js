import { CREATE_BLOG, DELETE_BLOG, UPDATE_BLOG} from '../constants';
import { bake_cookie, read_cookie } from 'sfcookies';

const blog = (action) => {
  return {
    title: action.title,
    content: action.content,
    datecreated: action.datecreated,
    id: Math.random()
  }
}

const removeById = (state = [], id) => {
    const blogs = state.filter(blog => blog.id !== id);
    return blogs;
}

const updateBlog = (state = [], action) => {
  const blogs = state.map(blog => {
    if(blog.id === action.id) {
      blog = action;
    }
    return blog;
  })

  return blogs;
}

const blogs = (state=[], action) => {
  let blogs = null;
  state = read_cookie('blogs');
  switch(action.type) {
    case CREATE_BLOG:
      blogs = [...state, blog(action)];
      bake_cookie('blogs', blogs);
      return blogs;
    case DELETE_BLOG:
      blogs = removeById(state, action.id);
      bake_cookie('blogs', blogs);
      return blogs;
    case UPDATE_BLOG:
      blogs = updateBlog(state, action);
      bake_cookie('blogs', blogs);
      return blogs;
    default:
      return state;
  }
}

export default blogs;
