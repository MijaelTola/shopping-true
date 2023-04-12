import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {useProductById} from "../../Services/Products/products";
import {DeleteButton, Footer, Heading, PrimaryButton, SecondaryButton} from "../../Component";
import {PreviewImage, ProductDetails} from "./product.styled";
import {FormInput, FormSelect} from "../../Component/FormItem/FormItem";
import {useCategoryList} from "../../Services/Category/category";
import {useFormik} from "formik";

export const Product = () => {

    const navigate = useNavigate();
    const { pathname } = useLocation();
    const path = pathname.split('/');
    const productId = path[path.length - 1];

    const { product, create } = useProductById(productId);
    const { categoryList } = useCategoryList();

    const {values, handleSubmit, handleChange, setFieldValue } = useFormik({
        initialValues: product,
        onSubmit: (values) => {
            console.log(values);
            navigate(-1);
        },
        enableReinitialize: true
    });

    return (
        <div>
            <Heading>
                PRODUCT - { create ? 'CREATE' : product?.name}
            </Heading>
            <ProductDetails>
                <div>
                    <FormInput
                        value={values?.name ?? ''}
                        label="Name"
                        name="name"
                        onChange={(e) => setFieldValue('name', e)}
                    />
                    {
                        create ?
                            <FormSelect
                                options={categoryList.map(cat => ({label: cat.name, value: cat.id}))}
                                label="Category"
                                name="categoryId"
                                value={values?.categoryId + '' ?? ''}
                                onChange={(e) => setFieldValue('categoryId', e)}
                            /> :
                            <FormInput
                                label="Category"
                                name="categoryId"
                                value={values?.categoryName ?? ''}
                                onChange={handleChange}
                            />
                    }

                    <FormInput
                        label="Price"
                        value={values.price+''}
                        onChange={(e) => setFieldValue('price', e)}
                        name="price"
                    />
                </div>
                <div>
                    <PreviewImage key={values.id} src={values?.image} alt=""/>
                </div>
            </ProductDetails>
            <Footer>
                {
                    create ? <PrimaryButton data-testid="create-item" onClick={()=> handleSubmit()}> Create </PrimaryButton>
                        : <DeleteButton onClick={() => navigate(-1)}> Delete </DeleteButton>
                }
                <SecondaryButton data-testid="cancel-button" onClick={() => navigate(-1)}> Cancel </SecondaryButton>
            </Footer>
        </div>
    )
}
