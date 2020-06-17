import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList'
import SearchPage from './SearchPage'
class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

    filterBookList=(shelf)=>{
      let res=[];
       if(this.state.books!=null){
         res = this.state.books.filter(x=>(x['shelf']===shelf))}
      return res;
       
    }

    updateBookShelf=(book)=>{
      console.log('thisstate',this.state.books)
      const i = this.state.books.findIndex(bk=>(bk['title']===book['title']));
      const updateBooks = this.state.books;
      console.log('updatebooks',updateBooks)
      updateBooks[i]=book;
      this.setState((prevState)=>({
        books: updateBooks
      }))
      
      
      
    }

  componentDidMount(){
    BooksAPI.getAll().then(books=>{
      this.setState((prevState)=>({
        books
      }))
    })
  }
  render() {
    console.log('booksapp, this.state.books',this.state.books)
    
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookList books={this.filterBookList('currentlyReading')} shelf={'Currently Reading'} updateBookShelf={this.updateBookShelf} />
                <BookList books={this.filterBookList('wantToRead')} shelf={'Want to Read'} updateBookShelf={this.updateBookShelf} />
                <BookList books={this.filterBookList('read')} shelf={'Read'} updateBookShelf={this.updateBookShelf} />
              
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
