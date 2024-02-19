import { useEffect, useState } from "react";

const NavBar = () => {

    const [navcat, setNavCat] = useState([]);

    useEffect(() => {
        fetch('./JsonData/categories.json')
            .then(res => res.json())
            .then(data => {
                setNavCat(data.category)
            })
    }, [])

    return (
        <div className="container-fluid mb-2">
            <div className="row">
                <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-center gap-5" id="navbarNav">
                            <a className="navbar-brand text-center text-white" href="#">Flipkart</a>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn bg-white" type="submit">Search</button>
                            </form>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active text-white" aria-current="page" href="#">Become a Seller</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">More</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#"><span className="bi bi-cart"></span>Cart</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="row bg-white navbar navbar-expand-lg bg-white">
                <div className="d-flex justify-content-between">
                    {
                        navcat.map((category, index) =>
                            <div className="dropdown  bg-white" key={index}>
                                <a class="dropdown-toggle text-decoration-none text-dark" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    {category}
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default NavBar;