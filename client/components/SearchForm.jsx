import React, { Component } from 'react';

 class SearchForm extends Component {
  
   constructor(props){
        super (props);
        
        this.state = {
            searchText: ''
        };
        this.onSearchChange = this.onSearchChange.bind(this);
        this. handleSubmit = this. handleSubmit.bind(this);
   }
  onSearchChange (e) {
    this.setState({ searchText: e.target.value });
  }
  
  handleSubmit (e){
    e.preventDefault();
    e.currentTarget.reset();
  }
  
  render()  { 
    return ( 
      <form className="search-form" onSubmit={this.handleSubmit} >
        <label className="is-hidden" htmlFor="search">Search</label>
        <input type="search" 
               onChange={this.onSearchChange}
               name="search" 
               placeholder="Search..." />
        <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
      </form>      
    )
  }
 }

 export default SearchForm;
  
 

