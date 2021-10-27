import React, {useState} from "react"
//adding components
import Player from './components/Player'
import Song from './components/Song'
//import Styles
import './styles/app.scss'
//import util
import data from './util'

function App() {
  //state
  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player 
        setIsPlaying={setIsPlaying} 
        isPlaying={isPlaying} 
        currentSong={currentSong}
      />
    </div>
  );
} 

export default App;
