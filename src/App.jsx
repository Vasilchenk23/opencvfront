import React, { useState } from 'react';
import '../src/style.css'

function App() {
    const [selectedCamera, setSelectedCamera] = useState('front'); 
    const handleChangeCamera = (event) => {
        setSelectedCamera(event.target.value);
    };

    return (
        <div className="App">
            <section>
                <h2 className='camera'>Select Camera:</h2>
                <select value={selectedCamera} onChange={handleChangeCamera}>
                    <option className='front' value="front">Front Camera</option>
                    <option className='back' value="back">Back Camera</option>
                </select>
                <h2 className='stream'>Video Stream:</h2>
            </section>
            <div className='iframe'>
                <iframe
                    src={`http://127.0.0.1:5000/video_feed_${selectedCamera}`}
                    width="800"
                    height="600"
                    title="Video Stream"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}

export default App;
