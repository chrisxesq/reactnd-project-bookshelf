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
     this.props.updateAll(book['id']);
   } else if (newShelf !==book['shelf'] && newShelf !=='none'){
      book['shelf']=newShelf;
      console.log('updatebook: ',book)    
      this.props.updateBookShelf(book)
      
    } else {
        console.log('ooops')
    }

    

  } 



  render(){
    console.log(this.props)
      return(
        <div>
        <div className="book-shelf-changer">
          <select value="move" onChange = {this.dothis}>
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
