import React, {Component} from 'react';
import { connect } from 'react-redux';
import { createBlog, deleteBlog, updateBlog, searchBlog,sortBlog} from '../actions';
import moment from 'moment';
import { FaEdit } from "react-icons/fa";
import { confirmAlert } from 'react-confirm-alert';
import { Dropdown } from 'react-bootstrap';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title :'',
      content : '',
      datecreated : moment().format('YYYY/MM/DD'),
      search: '',
      sortBy: ''
    }
  }

  editId: number;
  updateClicked: boolean = false;

  createBlog(event) {
    this.props.createBlog(this.state.title, this.state.content, this.state.datecreated);
    this.setState({
      title: '',
      content: ''
    })
  }

  editBlog(blog) {
    this.editId = blog.id;
    this.setState({
      title: blog.title,
      content: blog.content
    })
    this.updateClicked = true;
  }

  cancelEdit() {
    this.setState({
      title: '',
      content: ''
    })
    this.editId = null;
    this.updateClicked = false;
  }

  updateBlog() {
    this.props.updateBlog(this.editId, this.state.title, this.state.content, moment().format('YYYY/MM/DD'));
    this.setState({
      title: '',
      content: ''
    })
    this.updateClicked = false;
  }

  deleteBlog(id) {
    this.props.deleteBlog(id);
  }

  confirmDelete = (id) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='modal-container'>
            <div className="modal-content-2">
              <h1>Are you sure?</h1>
              <p>You want to delete this file?</p>
              <div className="row">
                <button className="btn btn-success col-6" onClick={onClose}>No</button>
                <button className="btn btn-danger col-6" onClick={() => {this.deleteBlog(id); onClose()}}>
                  Yes, Delete it!
                </button>
              </div>

            </div>
          </div>
        )
      }
    })
  }

  searchBlog() {
    this.props.searchBlog(this.state.search);
  }

  ActionItem: string = "Sort By";
  sortBlog(event) {
    let split_event = event.split("|");
    this.ActionItem = (split_event[0] + " " + split_event[1]).toUpperCase();
    this.props.sortBlog(event);
  }

  renderBlogs() {
    const { blogList } = this.props;

    return (<ul className="list-group col blog-list-group">
    {
      blogList.map(blog => {
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
                    onClick={() => this.confirmDelete(blog.id)}>
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <FaEdit className="edit" onClick={() => this.editBlog(blog)} />
                </div>

              </div>
            </div>
            <div className="blog-content"> {blog.content} </div>
          </li>
        )

      })
    }

    </ul>

  )}

  renderSearch() {
  return (<div className="search-class row">
      <div className="col-3">
        <input
            className="form-control"
            placeholder="Search keyword"
            value={this.state.search}
            onChange={event=>this.setState({search:event.target.value})}/>
      </div>
      <div className="col-2 search-btn">
        <button type="button"
                className="btn btn-info"
                onClick={(event)=>this.searchBlog()}>
                Search
        </button>
      </div>
      <div className="col-7 sort-class">
      <Dropdown >
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          {this.ActionItem}
        </Dropdown.Toggle>
          <Dropdown.Menu >
            <Dropdown.Item eventKey="title|asc" onSelect={(event) => this.sortBlog(event)}>TITLE ASC</Dropdown.Item>
            <Dropdown.Item eventKey="title|desc" onSelect={(event) => this.sortBlog(event)}>TITLE DESC</Dropdown.Item>
            <Dropdown.Item eventKey="datecreated|asc" onSelect={(event) => this.sortBlog(event)}>DATE CREATED ASC</Dropdown.Item>
            <Dropdown.Item eventKey="datecreated|desc" onSelect={(event) => this.sortBlog(event)}>DATE CREATED DESC</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>)
  }


  render() {
    const errors = validate(this.state.title, this.state.content);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return (
      <div className="App container">
        <div className="title">
          Simple Blog App
        </div>

        <div className="input-content">
          <div className="form-group title-group">
            <input
                  className="form-control"
                  placeholder="Title"
                  value={this.state.title}
                  onChange={event=>this.setState({title:event.target.value})}/>

          </div>

          <div className="form-group content-group">
            <textarea  className="form-control"
                  placeholder="What's on your mind..."
                  value={this.state.content}
                  onChange={event=>this.setState({content:event.target.value})}/>

          </div>
        </div>

          {!this.updateClicked && <button type="button"
                  className="btn btn-success"
                  disabled={isDisabled}
                  onClick={(event)=>this.createBlog(event)}>
                  Create Blog
          </button>}
          {this.updateClicked && <div><button type="button"
                  className="btn btn-secondary"
                  disabled={isDisabled}
                  onClick={(event)=>this.updateBlog()}>
                  Update Blog
          </button>
          <button type="button"
                  className="btn btn-danger"
                  onClick={(event)=>this.cancelEdit()}>
                  Cancel Edit
          </button></div>}

          {this.renderSearch()}
          {this.renderBlogs()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    blogList: state
  }
}

function validate(title, content) {
  // true means invalid, so our conditions got reversed
  return {
    title: title.length === 0,
    content: content.length === 0
  };
}

export default connect(mapStateToProps,{createBlog, deleteBlog, updateBlog, searchBlog, sortBlog})(App);
