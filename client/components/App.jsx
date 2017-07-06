import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent.jsx';
import TodoList from './test.jsx';



import axios from 'axios';



 class App extends React.Component {

    constructor(){
        super()
        this.state = {
            gifts: []
        }
    }

    // componentWillMount(){
    //     const query = '';
    //     const apiUrl = 'https://api.giphy.com/v1/stickers/search?api_key=cbde4fa4000b4da3b175aef91751f4a3&q=dog&limit=25&offset=0&rating=G&lang=en';
    //     // fetch
    //     // fetch(apiUrl)
    //     //     .then(responce => responce.json())
    //     //     .then(responceData => {
    //     //         // console.log(JSON.stringify( responceData));
    //     //         this.setState({gifts: responceData});
    //     //     }).catch(e => console.log(`error fatching our data ${e}`));

    //     axios.get(apiUrl)
    //         .then(res => {this.setState({gifts: res.data.data})
    //         //  console.log(res) 
    //                 })
    //         .catch(err => {
    //             console.log(`Error message during data getting from API: ${err}`);
    //         });

    // }

  render() {
    //    console.log(this.state.gifs);
            return (<div>
           <MuiThemeProvider >
               <div style={{textAlign:'left'}}>
                 <MyAwesomeReactComponent />
                 </div>
                
           </MuiThemeProvider>
             <TodoList />
                </div>
            );
  }
}

export default App;