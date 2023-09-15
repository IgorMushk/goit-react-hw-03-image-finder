import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css'

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  render() {
    const {webformatURL, largeImageURL} = this.props.data 

    return (
      <li className={css.ImageGalleryItem}>
        <img className={css.ImageGalleryItemImage} src={webformatURL} alt="" />
      </li>
    );
  }
}
