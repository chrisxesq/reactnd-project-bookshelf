import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import {Link} from 'react-router-dom'
import BookStateSelection from './BookStateSelection'

class SearchPage extends React.Component {
  state = {
    searchTerm:'',
    search:[]
  }
  updateState=(e)=>{
    e.preventDefault();
    const searchTerms = e.target.value;
    this.setState((prevState)=>({
        searchTerm: searchTerms
    }))

    BooksAPI.search(this.state.searchTerm).then(search=>{
        this.setState({
          search
        })
      })

  }

    
  
  render(){
      console.log('searchpage state: ',this.state)
      return(
        <div className="search-books">
        <div className="search-books-bar">
          <Link 
          className="close-search" 
          to ='/'>
              Close
          </Link>
          
          <div className="search-books-input-wrapper">
           <form 
           onChange={this.updateState}
           value={this.state}
           >

             <input type="text" placeholder="Search by title or author"/>
           </form>       
           
          </div>
        </div>
        <div className="search-books-results">
        <div className="bookshelf">
        <h2 className="bookshelf-title">Search Result</h2>
         <div className="bookshelf">
         <ol className="books-grid">
          test here!
         {this.state.search && this.state.error===undefined
         && 
         this.state.search.map(x=>(  
            <li className ="book" key={x['id']}>
            <div className="book-top">
            {x['imageLinks'] 
             ? <div className="book-cover" style={{ width: 128, height: 193, 
                backgroundImage: `url(${x['imageLinks']['smallThumbnail']})` }}></div>
             :<div className="book-cover" style={{ width: 128, height: 193, 
                backgroundColor: 'gray' }}></div>
            }
                  
                  <BookStateSelection book={x}  />
            </div>
             <div className="book-title">{x['title']}</div>
             {x['authors'] && <div className="book-authors">{x['authors'].join(', ')}</div>} 
            </li>    
        ))}
         </ol> 
        </div>
        </div>
    



          
        </div>
      </div>
          
      )
  }
}

export default SearchPage
