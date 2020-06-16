import React from 'react'


class BookStateSelection extends React.Component {

dothis =(e) => {
    
    e.preventDefault();
    const book = this.props.book;
    console.log('bingo!',book)
    
}

  render(){
    console.log('bookselect',this.props.book)
      return(
        <div>
        <div className="book-shelf-changer">
          <select onChange = {this.dothis}>
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
