import { render, screen } from "@testing-library/react"
import Figure from "../Figure"
import * as React from 'react';

test('Should render Figure', ()=>{
render(<Figure wrongLetters = {"abcdef"}/>);
screen.debug();

})