import React, { Component } from 'react'
import BookList from './BookList'

class Bookshelf extends Component {

  state = {
    books: [
      {
        "title": "The Linux Command Line",
        "authors": [
          "William E. Shotts, Jr."
        ], 
        "id": "nggnmAEACAAJ",
        "shelf": "currentlyReading",
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        }
      },
      {
        "title": "Learning Web Development with React and Bootstrap",
        "authors": [
          "Harmeet Singh",
          "Mehul Bhatt"
        ], 
        "id": "sJf1vQAACAAJ",
        "shelf": "currentlyReading",
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        }
      },
      {
        "title": "The Cuckoo's Calling",
        "authors": [
          "Robert Galbraith"
        ],
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "id": "evuwdDLfAyYC",
        "shelf": "wantToRead"
      },
      {
        "title": "Needful Things",
        "authors": [
          "Stephen King"
        ],
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=jAUODAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=jAUODAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "id": "jAUODAAAQBAJ",
        "shelf": "read"
      }
    ]
  }

  render() {

    const currentlyReadingBooks = this.state.books.filter(book => book.shelf === 'currentlyReading')
    const wantToReadBooks = this.state.books.filter(book => book.shelf === 'wantToRead')
    const readBooks = this.state.books.filter(book => book.shelf === 'read')

    return (
      <div>
        <BookList title={"Currently Reading"} books={currentlyReadingBooks} />
        <BookList title={"Want to Read"} books={wantToReadBooks} />
        <BookList title={"Read"} books={readBooks} />
      </div>
    )
  }
}

export default Bookshelf