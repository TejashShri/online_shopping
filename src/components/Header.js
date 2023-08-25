import { Link } from "react-router-dom";

const Header = () => {

    const num = new Date().getSeconds();
    console.log(num);
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img height={'70px'} src="https://th.bing.com/th?id=OIP.ZxJKzELlJx69HC_0E0qpMAHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-10 ">
                            <li className="nav-item">
                                <Link className="nav-link" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/product/${num}`}>Product Details</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart">Cart</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/demo">Demo</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/*">Checkout</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" />
                            <button className="btn btn-outline-primary" type="submit">Search</button>
                        </form>
                        {/* <SearchBlog /> */}
                    </div>
                </div>
            </nav>
        </div>
    );

};

export default Header;

// function ClickableContainer(props) {

//     const handleClick = () => {
//         // Handle the click event here
//         console.log("Container clicked!");
//     };

//     return (
//         <div onClick={handleClick} className="clickable-container border border-primary mx-3 my-3 px-3 py-3 ">
//         </div>
//     );
// }
// export default ClickableContainer;