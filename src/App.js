import './App.css';
import Fireworks from "./firework";
import {useState} from "react";
import { Helmet } from 'react-helmet';

const TITLE = 'Выйграй приз!!!';

function App() {
    const [showImage, setShowImage] = useState(false);

    const downloadImage = () => {
        const imageSrc = require('./assets/certificato.jpg');

        const link = document.createElement('a');
        link.download = 'certificato.jpg';
        link.href = imageSrc;
        link.click();
    }

    const handleClick = () => {
        setShowImage(true);
        downloadImage();
    }

  return (

      <div className="app" style={{
          backgroundColor: 'darkblue'
      }}>
          <Helmet>
              <title>{ TITLE }</title>
          </Helmet>

          <Fireworks />

        {
            <div className="message">

            {!showImage && (
                <div>
                  <div className="text">Поздравляем!</div><br/>
                  <div className="text">Вы стали победителем!</div><br/>
                  <div className="text">Для получения приза, нажмите на кнопку</div>
                </div>
            )}

            {showImage && (
                <div>
                    <div className="text">Buon compleanno, Signore!</div>
                </div>
            )}

              <div className="confetti">
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
              </div>
            </div>
        }<br/>

          <button onClick={handleClick}>Click Here</button><br/>


          {showImage && (
              <img
                  src={require('./assets/timurchik.jpg')}
                  alt="Timurchik"
              />
          )}


        <style>{`
        .app {
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        
        .message {
          position: relative;
        }
        
        .text {
          font-size: 40px;
          text-align: center;
          font-weight: bold;
          color: green;
          text-shadow:
            1px -1px 0 hsl(290,100%,40%),
            2px -2px 0 hsl(290,100%,40%),
            3px -3px 0 hsl(280,100%,60%),
            4px -4px 0 hsl(280,100%,60%),
            5px -5px 0 hsl(270,100%,75%),
            6px -6px 0 hsl(270,100%,80%),
            7px -7px 0 hsl(260,100%,85%),
            8px -8px 0 hsl(260,100%,90%);
        }
        
        .confetti {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .confetti-piece {
          position: absolute;
          width: 10px; height: 30px;
          background: #f2d74e;
          
          animation: fall 2s ease-in infinite;
        }
        
        @keyframes fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
          }
        }
      `}</style>
      </div>
  );
}

export default App;