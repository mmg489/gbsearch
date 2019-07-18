import React, { Component } from 'react';

import API from '../utils/API';

import SearchForm from '../components/SearchForm';
import BookList from '../components/BookList';
import MessageBox from '../components/MessageBox';

class Books extends Component {
  state = {
    searchValue: '',
    books: [],
    notif: {
      isActive: false,
      type: '',
      message: ''
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ searchValue: e.target.value });
  }

  search = () => {
    console.log('it will search for ', this.state.searchValue)
    API.searchBooks(this.state.searchValue)
      .then(response => {
        console.log(response);
        
        this.setState({
          books: response.data,
          searchValue: '',
          notif: {
            isActive: true,
            type: 'success',
            message: `Search Found for ${this.state.searchValue}`
          }
        });
      })
      .catch(err => {
        this.setState({
          notif: {
            isActive: true,
            type: 'danger',
            message: `Search Not Found for ${this.state.searchValue}`
          }
        });
      });
  }

  saveBook = (book) => {
    const bookData = {
      title: book.title,
      authors: book.authors,
      infoLink: book.infoLink,
      img: book.imageLinks.smallThumbnail,
      description: book.description
    };

    API.saveBook(bookData)
      .then(response => {
        console.log('the res', response);

        this.setState({
          notif: {
            isActive: true,
            type: 'success',
            message: `${bookData.title} Successfully Saved`
          }
        });

        // setTimeout(() => {
        //   this.props.history.push('/saved');
        // }, 3000);
      })
      .catch(err => {
        this.setState({
          notif: {
            isActive: true,
            type: 'danger',
            message: 'Something Went Wrong! Please try again!'
          }
        });
      });
  }

  render() {
    const { books, searchValue, notif } = this.state;

    return (
      <div className='Book'>
        <MessageBox notif={notif} />
        {/* <SearchForm
          searchValue={searchValue}
          handleChange={this.handleChange}
          search={this.search}
        /> */}
        <div className='search'>
            <h3>Book Search</h3>
            <div className='input-search'>
                <input
                    type='text'
                    value={searchValue}
                    className='theme-input'
                    onChange={this.handleChange}
                    placeholder='Please Search Book Title'
                    required
                />
                <button type='submit' className='theme-btn' onClick={this.search}>
                    Search
                </button>
            </div>
        </div>
        {books.length > 0 ? (
          <BookList books={books} saveBook={book => this.saveBook(book)} />
        ) : (
          <p className='no-data'>No Books Found</p>
        )}
      </div>
    );
  }
}

export default Books;