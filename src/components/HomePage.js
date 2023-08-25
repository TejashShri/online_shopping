import axios from "axios";
import { useEffect, useState } from "react";
import React from 'react';
//import ClickableContainer from './ClickableContainer';
import { Link } from "react-router-dom";
import ProductDetails from './ProductsDetails';

const Home = () => {

    const url = 'https://fakestoreapi.com/products';
    const [allProductlist, setAllProductList] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then(resp => setAllProductList(resp.data))
            .catch(err => console.log(err));
    },
        []);

    return (
        <div>
            <div
                style={{
                    backgroundImage: `url("")`,
                    backgroundRepeat: `no-repeat`,
                    // backgroundSize: 'contain',
                    backgroundPositionY: 'center',
                    backgroundPositionX: 'center'
                }}
            >
                <div className="">
                    <div className="">
                        <div style={{ minHeight: "100vh" }} className="container">
                            <div>
                                <p className="display-4 text-primary bg-dark">Deloitte Shopping App</p>
                                <div> {allProductlist.map((product, i) => {
                                    return <div className="App">
                                        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                                        <div obj={product} key={i}>
                                              <div className="ProdLink border border-primary mx-3 my-3 px-3 py-3 text-dark">
                                              {product.category}<br></br>{product.id} <img height={'50px'} src={product.image} ></img> <br></br>{'$'}{product.price}<br></br>{'Title:'}{product.title}<br></br><br></br>
                                              </div> 
                                        </div> 
                                        </Link>
                                    </div>

                                })}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};
export default Home;



// import axios from "axios";
// import { useEffect, useState } from "react";
// import React from 'react';
// import ClickableContainer from './ClickableContainer';
// const Home = () => {

//     const url = 'https://fakestoreapi.com/products';
//     const [allProductlist, setAllProductList] = useState([]);

//     useEffect(() => {
//         axios.get(url)
//             .then(resp => setAllProductList(resp.data))
//             .catch(err => console.log(err));
//     },
//         []);

//     return (
//         <div>
//             <div
//                 style={{
//                     backgroundImage: `url("")`,
//                     backgroundRepeat: `no-repeat`,
//                     // backgroundSize: 'contain',
//                     backgroundPositionY: 'center',
//                     backgroundPositionX: 'center'
//                 }}
//             >
//                 <div className="d-flex flex-row-reverse">
//                     <div className="col-5">
//                         <div style={{ minHeight: "100vh" }} className="container">
//                             <div>
//                                 <p className="display-4 text-primary bg-dark">Deloitte Shopping App</p>
//                                 <div> {allProductlist.map((product, i) => {
//                                     return <div className="App">
//                                     <ClickableContainer>
//                                       <h1>Click Me!</h1>
//                                       <p>This is a clickable container.</p>
//                                     </ClickableContainer>
//                                   </div>

//                                 })}</div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div >
//         </div >
//     );
// };
// export default Home;

{/* <div obj={product} key={i}>
                                              <div className="ProdLink">
                                              {product.category}<br></br>{product.id} <img height={'50px'} src={product.image} ></img> <br></br>{'$'}{product.price}<br></br>{'Title:'}{product.title}<br></br><br></br>
                                              </div> 
                                        </div> */}
//{product.category}<br></br>{product.id} <img height={'50px'} src={product.image} ></img> <br></br>{'$'}{product.price}<br></br>{'Title:'}{product.title}<br></br><br></br>
