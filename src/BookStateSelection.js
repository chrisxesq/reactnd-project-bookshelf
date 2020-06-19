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

       try{ this.props.updateBookShelf(book)} catch(err){console.error('wwe',err)}

    } else {
        console.log('no changes')
    }  
  } 

  render(){
      return(
        <div>
        <div className="book-shelf-changer">
          <select 
          value={
            !!this.props.book.shelf
            ? this.props.book.shelf
            : !!this.props.optionV
             ? this.props.optionV
             :'none'
            } onChange = {this.dothis}>
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
