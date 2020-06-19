import React from 'react'
import * as BooksAPI from './BooksAPI'

class BookStateSelection extends React.Component {

dothis =(e) => {
    
    const newShelf = e.target.value;
    const book = this.props.book;
   if(!book['shelf'] && newShelf!=='none'){
     book['shelf']=newShelf;
     BooksAPI.update(book, book['shelf']).then(book=>{
        console.log('api',book)
     })
     this.props.updateAll();
   } else if (newShelf !==book['shelf'] && newShelf !=='none'){
      book['shelf'] = newShelf;   
      this.props.updateBookShelf(book)
    } else {
        console.log('no changes')
    }  
  } 



  render(){
    //console.log(this.props.book.shelf)
    //console.log(this.props.currentbooks)
    //console.log(this.props.book)
      return(
        <div>
        <div className="book-shelf-changer">
          <select 
          value={this.props.book.shelf===undefined?'none':this.props.book.shelf} onChange = {this.dothis}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
            </select>
        </div>
        </div>
          
      )
  }
}

export default BookStateSelection
