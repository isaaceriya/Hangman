import { render, screen } from "@testing-library/react"
import Word from "../Word"
import * as React from 'react';

test('Should render Word', ()=>{
render(<Word selectedWord = {"hello"} correctLetters = {"helo"}/>);
screen.debug();



})