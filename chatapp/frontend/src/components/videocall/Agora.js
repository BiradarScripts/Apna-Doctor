import { useState } from 'react';
// import './App.css';
import { VideoRoom } from './VideoRoom';

function Agora() {
    const [joined, setJoined] = useState(false);
  return (
    <div>
      <h1>WDJ Virtual Call</h1>

        {!joined && (
        <button onClick={() => setJoined(true)}>
            Join Room
        </button>
        )}

        {joined && <VideoRoom />}
    </div>
  )
}

export default Agora
