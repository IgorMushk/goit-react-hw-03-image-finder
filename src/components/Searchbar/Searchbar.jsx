import React, { Component } from 'react'
import css from './Searchbar.module.css'
import { BsSearch } from 'react-icons/bs';

export default class Searchbar extends Component {
  render() {
    return (
        <header className={css.Searchbar}>
        <form className={css.SearchForm}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
           <BsSearch size={22}/> 
          </button>
      
          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    )
  }
}
