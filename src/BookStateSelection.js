import React from 'react'


class BookStateSelection extends React.Component {


  render(){

    console.log('bookselect',this.props)
      return(
        <div>
        <div className="book-shelf-changer">
          <select>
            <option value="move" disabled>BBBB to...</option>
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
