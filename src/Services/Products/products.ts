import {useCallback, useEffect, useState} from "react";
import {DEFAULT_PRODUCT, Products} from "./products.type";
import {ProductsMapped, useProductContext} from "../../Context/product.context";


export const useProductsList = () => {

    const { updateProducts } = useProductContext();
    const [productsList, setProductsList] = useState<Products[]>([])
    const getProductsList = useCallback(async (): Promise<Products[]> => {
        const res: Products[] = await require('../__mocked_data__/productList.json');
        setProductsList(res);
        updateProducts(() => {
            const data: ProductsMapped = {};
            res.forEach(currentProduct => {
                data[currentProduct.id] = currentProduct;
            })
            return data;
        })
        return res;
    }, [updateProducts]);

    useEffect(() => {
        getProductsList();
    }, [getProductsList])

    return {
        getProductsList,
        productsList,
        setProductsList
    }
}

export const useProductById = (id: string) => {

    const [product, setProduct] = useState<Products>(DEFAULT_PRODUCT);
    const [create, setCreate] = useState<boolean>(false);
    const { products } = useProductContext();
    const getProductByList = useCallback( async () => {
        const res: Products[] = await require('../__mocked_data__/productList.json');
        const productFound = res.filter(currentProduct => currentProduct.id === +id);
        setProduct(productFound[0]);
    }, [id]);

    useEffect(() => {
        if(id === 'create') {
            setProduct(DEFAULT_PRODUCT);
            setCreate(true);
        } else {
            if (products && id in products) {
                setProduct(products[id]);
            } else {
                getProductByList();
            }
        }
    }, [products, id, getProductByList]);

    return {
        product,
        create
    }
}
