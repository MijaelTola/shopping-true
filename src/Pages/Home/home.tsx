import { Heading } from '../../Component/index';
import {Link} from "react-router-dom";
import {ROUTES} from "../../Routes/routes";
export const Home = () => {
    return (
        <div>
            <Heading>
                Welcome to PRODUCT
            </Heading>
            <div>
                <p>
                    PRODUCT is as shopping inventory web application.
                </p>
                <p>
                    In order to start reviewing your inventory you can go to Products tab or <Link to={ROUTES.PRODUCT.BASE()}> Click here</Link>
                </p>
            </div>
        </div>
    )
}
