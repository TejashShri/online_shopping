import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from './components/HomePage';
import ProductsDetails from './components/ProductsDetails';
import Checkout from './components/Checkout';
import Cart from './components/Cart';
import Page404 from "./components/Page404";
import Header from "./components/Header";
const AppRoutes = () => {

    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header />
                </div>
                <div>
                    <Routes>
                        <Route path="home" element={<Homepage />} />
                        <Route path="product/:id" element={<ProductsDetails />} />
                        <Route path="cart" element={<Cart />} />
                        {/* <Route path="" element={<Checkout />} /> */}
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
};
export default AppRoutes;