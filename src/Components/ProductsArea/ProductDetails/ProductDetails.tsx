import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import config from "../../../Utils/Config";
import Loading from "../../SharedArea/Loading/Loading";
import "./ProductDetails.css";

function ProductDetails(): JSX.Element {

    // Get Route Parameter: 
    const params = useParams();
    const id = params.id;

    // Create state for the product to display: 
    const [product, setProduct] = useState<ProductModel>();

    // AJAX request that product: 
    useEffect(() => {

        axios.get<ProductModel>(config.productsUrl + id)
            .then(response => setProduct(response.data))
            .catch(err => alert(err.message));

    }, []);

    const navigate = useNavigate();

    async function deleteProduct() {
        try {

            // Are you sure message: 
            const confirmDelete = window.confirm("Are you sure?");
            if(!confirmDelete) return;

            // Delete this product: 
            await axios.delete(config.productsUrl + id);
            alert("Product Deleted");

            navigate("/products");
        }
        catch(err: any) {
            alert(err.message);
        }
    }

    return (
        <div className="ProductDetails">

            <h2>Product Details</h2>

            { !product && <Loading /> }

            {product && 
                <>
                    <h3>Name: {product.name}</h3>
                    <h3>Price: {product.price}</h3>
                    <h3>Stock: {product.stock}</h3>
                    <img src={config.productsImageUrl + product.imageName} />

                    <br />

                    {/* Navigate Back: */}
                    {/* <NavLink to="/products">Back</NavLink> */}

                    {/* Navigate Back: */}
                    <button onClick={() => navigate(-1)}>Back</button>
                    <button onClick={deleteProduct}>Delete</button>
                </>
            }

        </div>
    );
}

export default ProductDetails;