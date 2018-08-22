import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './components/ListBooks'
import Search from './components/Search'



console.log(BooksAPI.getAll());

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  getBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  componentDidMount() {
    this.getBooks()
  }

  updateShelf = (book,shelf) => {
    BooksAPI.update(book,shelf).then(() => {
      this.getBooks()
    })
  }



  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
            <ListBooks books={this.state.books} updateShelf={this.updateShelf} />
          )}
        />
        <Route path="/search" render={() => (
            <Search updateShelf={this.updateShelf} /> )}
        />
      </div>
    )
  }
}

export default BooksApp
