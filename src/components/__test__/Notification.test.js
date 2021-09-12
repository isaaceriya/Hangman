import { render, screen } from "@testing-library/react"
import Notification from "../Notification"
import * as React from 'react';

test('Should render Notification', ()=>{
render(<Notification />);
screen.debug();



})