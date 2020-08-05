import { CREATE_BLOG, DELETE_BLOG, UPDATE_BLOG, SEARCH_BLOG, SORT_BLOG} from '../constants';
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
      blog = {
        title: action.title,
        content: action.content,
        datecreated: action.datecreated,
        id: action.id
      };
    }
    return blog;
  })
  return blogs;
}

const searchBlog = (state = [], action) => {
  state = read_cookie('blogs');
  const blogs = state.filter(blog => blog.title.toLowerCase().includes(action.search) || blog.content.toLowerCase().includes(action.search));
  return blogs;
}

const sortBlog = (state = [], action) => {
  let blogs;
  switch(action) {
    case 'Title':
      return state.sort((a, b) => a.title > b.title ? 1 : -1)
    case 'Date Created':
      return state.sort((a, b) => a.datecreated > b.datecreated ? 1 : -1)
  }

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
    case SEARCH_BLOG:
      blogs = searchBlog(state, action);
      return blogs;
    case SORT_BLOG:
      blogs = sortBlog(state, action);
    //  return blogs;
    default:
      return state;
  }
}

export default blogs;
