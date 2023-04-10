import React from 'react';
import './App.css';
import {PageLayout, Navbar, Layout} from "./Component";
import {BrowserRouter as Router } from "react-router-dom";
import {RoutesPublic} from "./Routes/routes.public";
import {ROUTES} from "./Routes/routes";
import {ProductProvider} from "./Context/product.context";

function App() {
    return (
        <ProductProvider>
            <Router>
                <PageLayout>
                    <Navbar
                        logo={<img src="/logo.png" alt="" width="100px"/>}
                        items={[
                            {
                                label: 'HOME',
                                key: 'home',
                                name: ROUTES.HOME.BASE(),
                            },
                            {
                                label: 'PRODUCTS',
                                key: 'products',
                                name: ROUTES.PRODUCT.BASE()
                            },
                        ]}
                    />
                    <Layout>
                        <RoutesPublic/>
                    </Layout>
                </PageLayout>
            </Router>
        </ProductProvider>
    );
}

export default App;
