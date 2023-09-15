import React, { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './App.module.css';
import Searchbar from './Searchbar/Searchbar';
import { fetchImages } from '../api/pixbayAPI';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import { Loader } from './Loader/Loader';

//const perPage = 12;
//let currentPage = 1;

export class App extends Component {
  state = {
    query: '',
    hits: [],
    page: 1,
    totalPage: 0,
    loading: false,
    showButton: false,
  };

  componentDidUpdate(prevProps, prevState) {
    //const currentPage = this.state.page;
    if (prevState.query !== this.state.query) {
      this.setState({ hits: [], page: 1, showButton: false, loading: true });
      //fetchImages(this.state.query,currentPage,12)
      fetchImages(this.state.query, this.state.page, 12)
        .then(data => {
          console.log('data---1', data);
          console.log('this.state.page', this.state.page);
          //console.log(data.hits);
          if (!data.hits.length & !data.totalHits) {
            this.setState({loading: false})
            return toast.warn(
              'Sorry, there are no images matching your search query. Please try again.'
            );
          }
          //if (currentPage === 1) {
          if (this.state.page === 1) {
            toast.success(`Hooray! We found ${data.totalHits} images.`);
          }
          // - отобразить галерею
          //this.setState({ page: 1, hits:data.hits, loading: false });
          this.setState({
            //page: prevState.page + 1,
            totalPage: Math.ceil(data.totalHits / 12),
            hits: data.hits,
            loading: false,
            showButton: true,
          });
          //this.setState({page: currentPage+1});
          //
          if (data.hits.length === data.totalHits) {
            // 'zaz'
            this.setState({showButton: false})
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
    this.setState({ query,  page: 1, });
    // console.log('query', query);
  };

  loadMore = () => {
    // console.log(this.state.page);
    // this.setState(
    //   prevState => ({ page: prevState.page + 1 }),
    //   () => console.log(this.state.page)
    // );

    //const currentPage = this.state.page + 1;

    //fetchImages(this.state.query,currentPage,12)
    fetchImages(this.state.query, this.state.page, 12)
      .then(data => {
        console.log('data--NNN', data);
        //console.log(data.hits);
        this.setState(prevState => ({
          hits: [...prevState.hits, ...data.hits],
          loading: false,
          showButton: true,
          //page: currentPage +1,
          page: prevState.page + 1,
        }));
        //this.setState(prevState => ({ page: prevState.page + 1 }))
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery data={this.state.hits} />
        {this.state.loading && <Loader/>}
        {this.state.showButton && <Button loadMore={this.loadMore} />}
        <ToastContainer autoClose={2000} />
      </div>
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
