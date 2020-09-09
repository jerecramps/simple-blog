import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchBlog } from '../actions/index'
class BlogListComponent extends Component {

componentDidMount() {
  this.props.fetchBlog();
}
  render() {
    return (
      <div></div>
    );
  }

  const mapStateToProps = state => {
    return {
      blogList : state.blogs
    }
  }
}

export default connect(mapStateToProps, { fetchBlog })(BlogListComponent);
