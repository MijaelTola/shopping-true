import { render,  screen, act } from "@testing-library/react";
import {BrowserRouter as Router } from "react-router-dom";
import {Products} from "./products";

describe('PRODUCTS page', () => {

    beforeEach( async () => {
        await act(async () => await render(<Router> <Products/> </Router>))
    })

    it('should render page container', () => {
        expect(screen.getByTestId('product-title')).toBeInTheDocument();
    })

    it('should render all values in table', async () => {
        expect(screen.getAllByTestId('table-item')).toHaveLength(11);
    })

    it('should be able to open a product detail page', async () => {
        await act(() => screen.getByTestId('detail-button-1001').click())
        expect(screen.getByText('iPhone 13')).toBeInTheDocument()
    })
})
