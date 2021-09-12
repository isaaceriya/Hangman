import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Popup from './components/Popup';
import Notification from './components/Notification';
import { showNotification as show } from './helpers/helpers';
// import CountDownTimer from './components/CountDownTimer';
import './App.css';

const words = ['death', 'health', 'soldier', 'wizard'];
let selectedWord = words[Math.floor(Math.random() * words.length)];
let selectWordLength = selectedWord.length -1;




function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([selectedWord[0],selectedWord[selectWordLength]]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const seconds = 30 ;
  const [[secs], setTime] = React.useState([seconds]);

  const tick = () => {
    if(wrongLetters.length !== 7)
    if (secs === 0) {   
      setWrongLetters(currentLetters => [...currentLetters, ""]);
        reset()
    }
        else {
        setTime([secs - 1]);
        }
        
};

const reset = () => setTime([parseInt(seconds)]);


React.useEffect(() => {
  
  const timerId = setInterval(() => tick(), 1000);
  return () => clearInterval(timerId);
});





  useEffect(() => {
    const handleKeydown = event => {
      // setCorrectLetters[0] = selectedWord[0];
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
            
          }
        }
      }
    }
    window.addEventListener('keydown', handleKeydown);
    reset()

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  function playAgain() {
    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
    reset()
    setPlayable(true);

    // Empty Arrays
    setCorrectLetters([selectedWord[0],selectedWord[selectedWord.length-1]]);
    setWrongLetters([]);


  }

  return (
    <>
      <Header />
      <div>
            <p>{`${secs.toString().padStart(2, '0')}`}</p> 
        </div>
      {/* <CountDownTimer /> */}
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />    
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} />
      <Notification showNotification={showNotification} />
    </>
  );
}

export default App;
