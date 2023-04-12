import { render,  screen, act } from "@testing-library/react";
import {BrowserRouter as Router } from "react-router-dom";
import {Home} from "./home";

describe('HOME page', () => {

    beforeEach(() => {
        render(<Router> <Home/> </Router>)
    });

    it('should render Page container', () => {
        expect(screen.getByText('Welcome to PRODUCT')).toBeInTheDocument()
    })
})
