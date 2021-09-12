import { render, screen } from "@testing-library/react"
import WrongLetters from "../WrongLetters"
import * as React from 'react';

test('Should render WordLetters', ()=>{
render(<WrongLetters wrongLetters= {"hdqget"}/>);
screen.debug();



})