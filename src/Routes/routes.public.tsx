import {
    Routes,
    Route,
} from "react-router-dom";
import {Home} from "../Pages/Home/home";
import { ROUTES } from './routes';
import {Products} from "../Pages/Products/products";
import {Product} from "../Pages/Products/product";

const KEY = ":key"

export const RoutesPublic = () => {
    return (
        <Routes>
            <Route path={ROUTES.HOME.BASE()} element={<Home/>} />
            <Route path={ROUTES.PRODUCT.BASE()} element={<Products/>} />
            <Route path={ROUTES.PRODUCT.BY_ID(KEY)} element={<Product/>} />
        </Routes>
    )
}
