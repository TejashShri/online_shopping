import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProductById } from "../services/ProductService";
import { addToCart } from "./action";
//import { connect } from "react-redux";

const ProductDetails = () => {

    const productParam = useParams();
    const [productData, setProductData] = useState({ id: '', title: ''});

    useEffect(() => {
        getProductById(productParam.id)
            .then((resp) => {
                console.log(resp.data);
                setProductData(resp.data);
            })
            .catch((err) => { console.log(err); });
    }, [productParam.id]);


    return (

        <div className="container">
            <div className="row">
                <div className="col-2">
                    {/* left-side bar content here  */}
                </div>
                <div className="col-8">
                    <div>
                        <p className="display-5 text-primary">{productData.id}</p>
                        <p className="display-5 text-dark">{productData.category}</p>
                        <p className="display-3 text-dark">{productData.title}</p>
                        
                        <div className="py-3 my-3">
                            {
                                <img width="70%" src={productData.image} alt={productData.title} />
                            }
                        </div>
                        <p>{'Price: $'}{productData.price}<hr></hr><br></br>{'Description: '}{productData.description} </p>
                        <hr></hr>
                        
                        <button onClick={() => addToCart(productData)}>Add to Cart</button>
                        <hr></hr>
                        <p>{'Product Rating : '}{}</p>
                    </div>
                    
                </div>
                <div className="col-2">
                    {/* Right-side bar content here  */}
                </div>
            </div>
        </div>
    );
};
export default ProductDetails;

// const ProductDetails = () => {
//     return (
//         <div className="container">
//             <div className="row mt-3">
//                 <div className="col-2">
//                     {/* left-side bar content here  */}
//                 </div>
//                 <div className="col-8">
//                     <div>
//                         <p className="display-5 text-primary">ProductDetails</p>
//                         <hr />
//                         <p className="lead">

//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );

// };

// export default ProductDetails;

