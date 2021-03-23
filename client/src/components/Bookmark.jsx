import React, { Component } from 'react';
import UpdateForm from './UpdateForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
const axios = require('axios');

export class Bookmark extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editting: false,
    };
  }

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

  toggleEditForm = () => {
    this.setState({ editting: !this.state.editting });
  };

  render() {
    return (
      <>
        <div className='bookmark-container'>
          <a className='title' href={this.props.bookmark.url} target='_blank'>
            {this.props.bookmark.title}
          </a>
          <div className='actions-container'>
            <button
              className='edit-button'
              onClick={() => this.toggleEditForm()}
            >
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button
              className='delete-button'
              onClick={() => this.deleteBookmark(this.props.bookmark._id)}
              style={this.deleteButtonStyle}
            >
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </div>
        </div>
        {this.state.editting && (
          <UpdateForm
            bookmark={this.props.bookmark}
            fetchdata={this.props.fetchdata}
          />
        )}{' '}
      </>
    );
  }
}

export default Bookmark;
