import React from 'react';
import axios from 'axios';
import SearchForm from './SearchForm.jsx';
import GifList from './GifList.jsx';


 class App extends React.Component {

    constructor(){
        super()
        this.state = {
            gifts: []
        }
    }

    componentWillMount(){
        const query = '';
        const apiUrl = 'https://api.giphy.com/v1/stickers/search?api_key=cbde4fa4000b4da3b175aef91751f4a3&q=dog&limit=25&offset=0&rating=G&lang=en';
        // fetch
        // fetch(apiUrl)
        //     .then(responce => responce.json())
        //     .then(responceData => {
        //         // console.log(JSON.stringify( responceData));
        //         this.setState({gifts: responceData});
        //     }).catch(e => console.log(`error fatching our data ${e}`));

        axios.get(apiUrl)
            .then(res => {this.setState({gifts: res.data.data})
            //  console.log(res) 
                    })
            .catch(err => {
                console.log(`Error message during data getting from API: ${err}`);
            });

    }

  render() {
    //    console.log(this.state.gifs);
            return (
            <div>
                <div className="main-header">
                <div className="inner">
                    <h1 className="main-title">GifSearch</h1>
                    <SearchForm />      
                </div>   
                </div>    
                <div className="main-content">
                <GifList data = {this.state.gifts} />
                </div>
            </div>
            );
  }
}

export default App;