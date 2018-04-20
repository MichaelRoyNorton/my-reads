import React, { Component } from 'react';
import Book from './Book';

class BookShelf extends Component {
  render () {
    const book = this.props.books
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <Book books={book} />
        </div>
      </div>
    )
  }
}

export default BookShelf
