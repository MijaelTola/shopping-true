import React, {PropsWithChildren, useState} from "react";
import {Products} from "../Services/Products/products.type";

export type ProductsMapped = {[key: string]: Products};

type ProductContextType = {
    products: ProductsMapped | undefined,
    updateProducts: React.Dispatch<React.SetStateAction<ProductsMapped | undefined>>;
}

export const DEFAULT_PRODUCT_CONTEXT: ProductContextType = {
    products: {},
    updateProducts: () => {}
}

export const ProductContext = React.createContext<ProductContextType>(DEFAULT_PRODUCT_CONTEXT);

export const ProductProvider = ({children} : PropsWithChildren<{}>) => {

    const [products, setProducts] = useState<ProductsMapped>();
    return (
        <ProductContext.Provider value={{
            products,
            updateProducts: setProducts
        }}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProductContext = () => React.useContext(ProductContext);
