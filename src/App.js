import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import './App.css'
import BookList from './BookList'
import SearchPage from './SearchPage'

class BooksApp extends React.Component {
  state = {
    books:[]
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

    updateAll(){
      BooksAPI.getAll().then(books=>{
        this.setState((prevState)=>({
          books
        }))
      })
    }
    
  render() {
    console.log('booksapp, this.state.books',this.state)
    
    return (
      <div className="app">

        <Route path='/search' render={()=>(
          <SearchPage currentbooks={this.state.books} updateAll={this.updateAll} />
        )} />

        <Route exact path='/' render={()=>(
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
            <Link to='/search'>Add a book</Link>
          </div>
        </div>

        )} />

        {/* {this.state.showSearchPage 
        ? (
          <SearchPage 
          showsearchpage={this.updateToFalseShowSearchPage}
          />
        ) 
        : (
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
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
        )} */}
      </div>
    )
  }
}

export default BooksApp
