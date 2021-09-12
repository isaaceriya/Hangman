import { render, screen } from "@testing-library/react"
import Header from "../Header"
import * as React from 'react';

test('Should render Header', ()=>{
render(<Header />);
screen.debug();



})