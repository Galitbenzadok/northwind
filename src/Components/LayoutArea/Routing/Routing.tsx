import { Navigate, Route, Routes } from "react-router-dom";
import About from "../../AboutArea/About/About";
import Home from "../../HomeArea/Home/Home";
import AddProduct from "../../ProductsArea/AddProduct/AddProduct";
import ProductDetails from "../../ProductsArea/ProductDetails/ProductDetails";
import ProductList from "../../ProductsArea/ProductList/ProductList";
import PageNotFound from "../PageNotFound/PageNotFound";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <Routes>

            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<ProductList />} />

            {/* Route Parameter - the ":id" is the Route Parameter */}
            <Route path="/products/details/:id" element={<ProductDetails />} />

            {/* Handle Form: */}
            <Route path="/products/new" element={<AddProduct />} />

            <Route path="/about" element={<About />} />

            {/* Default route - first way: */}
            {/* <Route path="/" element={<Home />} /> */}

            {/* Default route - second way: */}
            <Route path="/" element={<Navigate to="/home" />} />

            <Route path="*" element={<PageNotFound />} />

        </Routes>
    );
}

export default Routing;
