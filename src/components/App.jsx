import React, { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import css from './App.module.css';
import Searchbar from './Searchbar/Searchbar';
import {fetchImages} from '../api/pixbayAPI';
import ImageGallery from './ImageGallery/ImageGallery';

const perPage = 12;
let currentPage = 1;

export class App extends Component {
  state = {
    query: '',
    hits: [],
    loading: false,
    showButton: false,
  };

  componentDidUpdate(prevProps, prevState) { 
    if (prevState.query !== this.state.query) {
    fetchImages(this.state.query,currentPage,perPage)
    .then(data=>{
      console.log('data', data)
      console.log(data.hits);
      if (!data.hits.length & !data.totalHits) {
        //
        return  toast.warn(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      }
      if (currentPage === 1) {
        toast.success(`Hooray! We found ${data.totalHits} images.`);
      }
      // - отобразить галерею
      this.setState({ hits:data.hits, loading: false });
      //
      if (data.hits.length === data.totalHits) {
        // 'zaz'
        //
        toast.info(
          "We're sorry, but you've reached the end of search results."
        );
      }
      // - LoadMore показать
    })
    .catch(err => console.log(err));
  }
  } 


  onSubmit = query => {
    this.setState({ query });
    console.log('query', query);
  };

  render() {
    return (
      <>
      <div className={css.App}>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery data={this.state.hits}  />
      </div>
      <ToastContainer autoClose={2000} />
      </>
    );
  }
}

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template!
//     </div>
//   );
// };
