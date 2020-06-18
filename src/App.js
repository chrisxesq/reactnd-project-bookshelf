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
      const i = this.state.books.findIndex(bk=>(bk['title']===book['title']));
      const updateBooks = this.state.books;
      BooksAPI.update(book,book['shelf'])
      updateBooks[i]=book;
      this.setState((prevState)=>({
        books: updateBooks
      }))
      console.log('title',this.state.books)
      
    }

    componentDidMount(){
      BooksAPI.getAll().then(books=>{
        this.setState((prevState)=>({
          books
        }))
      })
    }

    updateAll=(bookID)=>{
      console.log('Im update all')
      console.log('updateAll, thisstate,  ',this.state)


      BooksAPI.get(bookID).then(book=>{
        this.setState((prevState)=>({
          books: [...prevState.books, book]
        }))
      })
    }
    
  render() {
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
      </div>
    )
  }
}

export default BooksApp
