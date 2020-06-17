import React from 'react'


class SearchPage extends React.Component {



  render(){
    
      return(
    <div className="open-search">
        <button onClick={() => this.props.updatePage()}>Add a book</button>
      </div>
          
      )
  }
}

export default SearchPage
