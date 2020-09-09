// import { CREATE_BLOG, DELETE_BLOG, UPDATE_BLOG, SEARCH_BLOG, SORT_BLOG, FETCH_BLOG} from '../constants';
import { CREATE_BLOG, DELETE_BLOG, UPDATE_BLOG, SEARCH_BLOG, SORT_BLOG} from '../constants';
import { bake_cookie, read_cookie } from 'sfcookies';
import  {combineReducers}  from 'redux';

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

  let blogs = state;
  let split_action = action.sortBy.split('|');
  switch(split_action[1]) {
    case 'asc':
      blogs = state.sort((a, b) => (a[split_action[0]] > b[split_action[0]]) ? 1 : -1)
    break;
    case 'desc':
      blogs = state.sort((a, b) => (a[split_action[0]] < b[split_action[0]]) ? 1 : -1)
    break;
    default:
     break;
  }

  return blogs;

}

// const fetchBlog = (state = [], action) => {
//   let blogs = state;
//   return blogs;
// }

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
      bake_cookie('blogs', blogs);
      return blogs;
    // case FETCH_BLOG:
    //   blogs = action.payload;
    //   break;
    default:
      return state;
  }
}

export default combineReducers({blogs});
