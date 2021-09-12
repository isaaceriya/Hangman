import { render, screen } from "@testing-library/react"
import Popup from "../Popup"
import * as React from 'react';

test('Should render Popup', ()=>{
render(<Popup correctLetters= {"abcde"} wrongLetters={"fghi"} selectedWord={"abcde"} Playable={true} playAgain={false}/>);
screen.debug();



})