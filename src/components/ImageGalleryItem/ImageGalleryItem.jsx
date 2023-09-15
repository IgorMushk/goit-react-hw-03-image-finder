import React from 'react';
import css from './ImageGalleryItem.module.css'

const ImageGalleryItem = ({webformatURL, onOpenModal}) => {
    //console.log('webformatURL', webformatURL)
    return (
      <li className={css.ImageGalleryItem}>
        <img className={css.ImageGalleryItemImage} src={webformatURL} alt="" onClick={()=>onOpenModal()}/>
      </li>
    );

}

export default ImageGalleryItem;

// export default class ImageGalleryItem extends Component {
//   render() {
//     const {webformatURL, largeImageURL} = this.props.data 
//     //console.log('largeImageURL', largeImageURL)
//     return (
//       <li className={css.ImageGalleryItem}>
//         <img className={css.ImageGalleryItemImage} src={webformatURL} alt="" />
//       </li>
//     );
//   }
// }
