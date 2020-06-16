import React from 'react'
import BookStateSelection from './BookStateSelection'

class BookList extends React.Component {
  constructor(props){
    super();
    
  }

  render(){
    console.log(this.props.shelf,this.props.books)
      return(
        <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelf}</h2>
        <div className="bookshelf">
        <ol className="books-grid">
        {this.props.books.map(x=>(
          <div className="book">
            <li key={x['id']}>
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${x['imageLinks']['smallThumbnail']})` }}></div>
                <BookStateSelection books={this.props.books} /> 
            </div>
             <div className="book-title">{x['title']}</div>
             <div className="book-authors">{x['authors'].join(', ')}</div>
            </li>
          </div>
        ))}
        </ol> 
        </div>
        </div>

      )
       
  }
}


export default BookList

