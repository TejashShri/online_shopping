import axios from "axios";
import { useEffect, useState } from "react";


const ProductDetails = () => {

    const url = 'https://fakestoreapi.com/products';
    const [productData, setProductData] = useState({ id: '', title: '' });

    useEffect(() => {
        axios.get(url)
            .then((resp) => {
                console.log(resp.data);
                setProductData(resp.data);
            })
            .catch((err) => { console.log(err); });
    }, []);

    return (

        <div className="container">
            <div className="row">
                <div className="col-2">
                    {/* left-side bar content here  */}
                </div>
                <div className="col-8">
                    <div>
                        <p className="display-5 text-primary">jdhjhf</p>
                        <hr />
                        <p className="lead"></p>
                        <div>
                            {
                                
                                
                            }
                        </div>
                        
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

