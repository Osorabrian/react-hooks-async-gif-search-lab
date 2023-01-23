import React, {useState, useEffect} from "react";
import GifListContainer from "./GifListContainer";
import GifSearch from "./GifSearch";
import NavBar from "./NavBar";

// the App component should render out the GifListContainer component

function App() {

  const [gifs, setGifs] = useState([])

  useEffect(() => {
    fetch("https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=Mu6LAcs1UTDi47CPOnaosylT6jQCvAyo&rating=g")
    .then(r => r.json())
    .then(data => setGifs(data.data))
    },[])

  function giphySearch(term){
    const newArray = gifs.filter(gif => gif.slug === term)
    setGifs(newArray)
    console.log(gifs)
  }

  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <GifSearch giphySearch={giphySearch} />
      < GifListContainer gifs={gifs.slice(0, 3)}/>
    </div>
  );
}

export default App;
