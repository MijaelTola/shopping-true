import {Table, SecondaryButton, Heading, PrimaryButton} from "../../Component";

import {useNavigate} from "react-router-dom";
import {useProductsList} from "../../Services/Products/products";
import {ROUTES} from "../../Routes/routes";
import {TableSection} from "./products.styled";

export const Products = () => {

    const { productsList } = useProductsList();
    const navigate = useNavigate();

    return (
        <div>
            <Heading>
                <div>
                    PRODUCTS
                </div>
                <PrimaryButton onClick={() => navigate(ROUTES.PRODUCT.BY_ID('create'))}>
                    Create
                </PrimaryButton>
            </Heading>
            <TableSection>
                <Table
                    columns={[
                        {
                            name: 'Product Id',
                            key: 'id',
                        },
                        {
                            name: 'Product Name',
                            key: 'name',
                        },
                        {
                            name: 'Category',
                            key: 'categoryId'
                        },
                        {
                            name: 'Price',
                            key: 'price'
                        },
                        {
                            name: '',
                            key: 'event',
                            render: (value) => <SecondaryButton onClick={() => navigate(ROUTES.PRODUCT.BY_ID(value.id))}> Details </SecondaryButton>
                        }
                    ]}
                    dataSource={productsList}
                />
            </TableSection>
        </div>
    )
}
