import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import config from "../../../Utils/Config";
import Loading from "../../SharedArea/Loading/Loading";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

function ProductList(): JSX.Element {

    // Create products state: 
    const [products, setProducts] = useState<ProductModel[]>([]);

    useEffect(() => {

        // IIFE for using async-await:
        (async function () {

            // AJAX Request:
            const response = await axios.get<ProductModel[]>(config.productsUrl);

            // Extract the data from the response:
            setProducts(response.data);

        })();

    }, []);

    return (
        <div className="ProductList">

            {products.length === 0 && <Loading />}

            <NavLink to="/products/new">➕</NavLink>

            {products.map(p => <ProductCard key={p.id} product={p} />)}

        </div>
    );
}

export default ProductList;
