import React, { Component } from 'react';
import UpdateForm from './UpdateForm';
const axios = require('axios');

export class Bookmark extends Component {
  deleteBookmark = async (id) => {
    try {
      const response = await axios.delete(`/bookmarks/${id}`);
      // console.log(response);
      this.props.fetchdata();
    } catch (err) {
      console.log(err);
    }
  };

  deleteButtonStyle = {
    color: 'red',
  };

  render() {
    return (
      <>
        <h4>
          <span
            onClick={() => this.deleteBookmark(this.props.bookmark._id)}
            style={this.deleteButtonStyle}
          >
            {' '}
            X{' '}
          </span>
          {this.props.bookmark.title} <span>{this.props.bookmark.url}</span>
        </h4>
        <UpdateForm
          bookmark={this.props.bookmark}
          fetchdata={this.props.fetchdata}
        />
      </>
    );
  }
}

export default Bookmark;
