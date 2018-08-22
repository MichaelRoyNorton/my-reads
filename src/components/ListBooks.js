import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'


class ListBooks extends Component {

  render() {
    const book = this.props.books
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf title="CurrentlyReading" books={book.filter((book) => (book.shelf === "currentlyReading"))} updateShelf={this.props.updateShelf} />
          <BookShelf title="Want to Read" books={book.filter((book) => (book.shelf === "wantToRead"))} updateShelf={this.props.updateShelf} />
          <BookShelf title="Read" books={book.filter((book) => (book.shelf === "read"))} updateShelf={this.props.updateShelf} />
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks;
