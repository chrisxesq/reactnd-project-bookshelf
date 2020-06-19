import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import './App.css'
import BookList from './BookList'
import SearchPage from './SearchPage'

class BooksApp extends React.Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: []
  }

    filterBookList=(shelf)=>{
      let res=[];
      if(this.state.books!=null){
        res = this.state.books.filter(x=>(x['shelf']===shelf))}
      return res;   
    }

    updateBookShelf=(book)=>{
      
      BooksAPI.update(book,book['shelf'])
      
      this.setState((prev)=>({
        currentlyReading: prev.currentlyReading.filter(x=>x.id!==book.id),
        wantToRead: prev.wantToRead.filter(x=>x.id!==book.id),
        read: prev.read.filter(x=>x.id!==book.id)
      }))

      book['shelf']==='currentlyReading'
      ? this.setState(p=>({currentlyReading:[...p.currentlyReading, book]}))
      : book['shelf']==='wantToRead'
        ? this.setState(p=>({wantToRead:[...p.wantToRead, book]}))
        : this.setState(p=>({read:[...p.read, book]}))
          
    }

    componentDidMount(){       
      this.updateAll();
    }

    updateAll=()=>{
      BooksAPI.getAll().then(books=>{
        this.setState({
          currentlyReading: books.filter(x=>x.shelf==='currentlyReading'),
          wantToRead: books.filter(x=>x.shelf==='wantToRead'),
          read: books.filter(x=>x.shelf==='read')
        })
      })  
    }
    
  render() {
    return (
      <div className="app">

        <Route path='/search' render={()=>(
          <SearchPage currentbooks={this.state} updateAll={this.updateAll} />
        )} />

        <Route exact path='/' render={()=>(
          <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <BookList books={this.state.currentlyReading} shelf={'Currently Reading'} updateBookShelf={this.updateBookShelf} />
              <BookList books={this.state.wantToRead} shelf={'Want to Read'} updateBookShelf={this.updateBookShelf} />
              <BookList books={this.state.read} shelf={'Read'} updateBookShelf={this.updateBookShelf} />
            
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
