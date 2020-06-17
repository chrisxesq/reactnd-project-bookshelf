import React from 'react'
import * as BooksAPI from './BooksAPI'
import {Link} from 'react-router-dom'

class SearchPage extends React.Component {
  state = {
    searchTerm:''
  }
  updateState=(e)=>{
    e.preventDefault();
    const searchTerms = e.target.value;
    this.setState((prevState)=>({
        searchTerm: searchTerms
    }))

    BooksAPI.search(searchTerms).then(search=>{
      this.setState((prevState)=>({
        search
      }))
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

        

          <ol className="books-grid"></ol>
        </div>
      </div>
          
      )
  }
}

export default SearchPage
