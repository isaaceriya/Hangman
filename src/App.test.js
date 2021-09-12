import { render, screen } from "@testing-library/react"
import App from "./App"
import * as React from 'react';

test('Should render App`', ()=>{
render(<App/>);
screen.debug();



});
