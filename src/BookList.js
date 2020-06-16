import React from 'react'
import './App.css'
import BookStateSelection from './BookStateSelection'

class BookList extends React.Component {
  constructor(props){
    super();
    this.state={};
    
  }

  render(){
    console.log(this.props.shelf,this.props.books)
      return(
        <div>
          <div className="books-grid">
          {this.props.books.map(x=><li key={x['id']}>
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: x['imageLinks']['smallThumbnail'] }}></div>
          <div className="book-title book">{x['title']}</div>
          <div className="book-authors book">{x['authors']}</div>
          <BookStateSelection books={this.props.books} />
           </li>)}
           </div>
        </div>
          
      )
  }
}

export default BookList

