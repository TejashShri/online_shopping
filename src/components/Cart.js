import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProductById } from "../services/ProductService";
//import { connect } from "react-redux";

const Cart = () => {

    const cartParam = useParams();
    const [cartData, setCartData] = useState({ id: '', title: ''});

    useEffect(() => {
        getProductById(cartParam.id)
            .then((resp) => {
                console.log(resp.data);
                setCartData(resp.data);
            })
            .catch((err) => { console.log(err); });
    }, [cartParam.id]);

    return (

        <div className="container">
            <div className="row">
                <div className="col-2">
                    {/* left-side bar content here  */}
                </div>
                <div className="col-8">
                    <div>
                        <p className="display-5 text-primary">{cartData.id}</p>
                        <p className="display-5 text-dark">{cartData.category}</p>
                        <p className="display-3 text-dark">{cartData.title}</p>
                    </div>
                    
                </div>
                <div className="col-2">
                    {/* Right-side bar content here  */}
                </div>
            </div>
        </div>
    );
};
export default Cart;