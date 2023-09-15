import React, { Component } from 'react';

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  render() {
    return (
      <li class="gallery-item">
        <img src="" alt="" />
      </li>
    );
  }
}
