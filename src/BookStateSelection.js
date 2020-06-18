import React from 'react'
import * as BooksAPI from './BooksAPI'

class BookStateSelection extends React.Component {

dothis =(e) => {
    
    const newShelf = e.target.value;
    const book = this.props.book;
    //console.log('book title: ',book['title'])
    //console.log('new shelf: ',newShelf)

   if(!book['shelf']){
    book['shelf']=newShelf;
    console.log(book)


    BooksAPI.update(book, book['shelf']).then(book=>{
        console.log('api',book)
    })

    this.props.updateAll();





   } else if (newShelf !=='none' && newShelf !==book['shelf']){
    book['shelf']=newShelf;
    //console.log('updatebook: ',book)
    this.props.updateBookShelf(book)
    } else {
        console.log('ooops')
    }
  } 



  render(){
    console.log('bookselect',this.props)
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
