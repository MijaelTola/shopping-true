import {useCallback, useEffect, useState} from "react";
import {Category} from "./category.type";

export const useCategoryList = () => {

    const [categoryList, setCategoryList] = useState<Category[]>([]);
    const getCategoryList = useCallback(async () => {
        const res: Category[] = await require('../__mocked_data__/categoryList.json')
        setCategoryList(res);
        return res;
    }, []);

    useEffect(() => {
        getCategoryList();
    }, [getCategoryList]);

    return {
        categoryList,
        getCategoryList
    };

}
