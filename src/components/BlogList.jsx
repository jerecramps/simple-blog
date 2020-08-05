import React from 'react';
import { FaEdit } from "react-icons/fa";
import moment from 'moment';

const BlogList = ({ blogs, confirmDelete, editBlog}) => {

  return (
    blogs.map(blog => {
      return (
        <li key={blog.id} className="list-group-item">
          <div className="row">
            <div className="col-9">
              <div className="blog-title"> {blog.title}
                <span className="blog-datecreated"> {moment(blog.datecreated).format("MMM-DD")} </span>
              </div>
            </div>
            <div className="col-3">
              <div className="blog-delete">
                  <button type="button" className="close" aria-label="Close"
                  onClick={() => confirmDelete(blog.id)}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <FaEdit className="edit" onClick={() => editBlog(blog)} />
              </div>

            </div>
          </div>
          <div className="blog-content"> {blog.content} </div>
        </li>
      )

    })
  )
};

export default BlogList;
