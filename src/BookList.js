import React from 'react'
import BookStateSelection from './BookStateSelection'

class BookList extends React.Component {

  render(){
    //console.log('booklistprops',this.props)
      return(
        <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelf}</h2>
        <div className="bookshelf">
        <ol className="books-grid">
        {this.props.books.map(x=>(  
            <li className ="book" key={x['id']}>
            <div className="book-top">

            {x['imageLinks'] 
             ? <div className="book-cover" style={{ width: 128, height: 193, 
                backgroundImage: `url(${x['imageLinks']['smallThumbnail']})` }}></div>
             :<div className="book-cover" style={{ width: 128, height: 193, 
                backgroundColor: 'gray' }}></div>
            }

                <BookStateSelection book={x} updateBookShelf={this.props.updateBookShelf} /> 
            </div>
             <div className="book-title">{x['title']}</div>
             {x['authors'] && <div className="book-authors">{x['authors'].join(', ')}</div>} 
            </li>    
        ))}
        </ol> 
        </div>
        </div>

      )
       
  }
}


export default BookList

