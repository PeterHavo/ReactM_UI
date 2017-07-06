import React from 'react';
import Gif from './Gif.jsx';


const GifList = props => { 
  
  const results = props.data;
  let gifs = results.map(gif =>
    <Gif url={gif.images.fixed_height.url} key={gif.id} />
  );
  
  return(
    <ul className="gif-list">
      {gifs}
    </ul> 
  );
}

export default GifList;





// const GifList = props => { 
//   const result = props.data;
//   let images = result.map(gif => {
//    <Gif url={gif.images.downsized.url} />
//    console.log(gif.images.downsized.url) 
//   })
  
 
//   return(
//     <ul className="gif-list">
//       {/*<Gif />*/}
//       {images}
//     </ul> 
     
//   );
// }

// export default GifList;


// import React from 'react';
// import Gif from './Gif.jsx';

// const GifList = props => { 
  
//   return(
//     <ul className="gif-list">
//       <Gif />
//     </ul> 
//   );
// }

// export default GifList;