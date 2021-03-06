import React, { Component } from "react";
import "./App.css";
import Bookshelf from "./Bookshelf";
import Search from "./Search";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import * as BooksApi from "./BooksAPI";

class App extends Component {
  state = {
    booksOnShelf: []
  };

  componentDidMount() {
    BooksApi.getAll().then(booksOnShelf => {
      this.setState({ booksOnShelf });
    });
  }

  moveBook = (book, newShelfName) => {
    BooksApi.update(book, newShelfName).then(() => {
      BooksApi.getAll().then(books => {
        this.setState(() => ({
          booksOnShelf: books
        }));
      });
    });
  };

  render() {
    return (
      <div className="body">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <div className="list-books-content">
                  <Bookshelf
                    className="bookshelf"
                    books={this.state.booksOnShelf}
                    handleChange={this.moveBook}
                  />
                </div>
              )}
            />
            <Route
              exact
              path="/search"
              render={() => (
                <Search
                  books={this.state.booksOnShelf}
                  handleChange={this.moveBook}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
