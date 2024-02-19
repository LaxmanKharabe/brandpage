import { useEffect, useState } from "react";

const Sort = () => {
    const [products, setProducts] = useState([]);
    const [minprice] = useState(["Min", 200, 300, 500, 700, 800, 900,1000, 1200, 1400, 1600]);
    const [maxprice] = useState(["Max", 10000, 15000, 20000, 25000]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                //products is the inbuilt property of json data which is comming from the api
            })
    }, []);

    function MinPriceHandle(e){
       
    }
    return (
        <div className="container-fluid">
            <div className="d-flex gap-2">
                <div className="col-3 bg-white">
                    <div className="container">
                        <div className="row pt-2 pb-2 border border-bottom-1">
                            <span className="h5">Filters</span>
                        </div>
                        <div className="row pt-2 border border-bottom-1 font-bold">
                            <p className="fs7">CATEGORIES</p>
                            <div className="mob">
                                <p className="d-flex align-items-center text-gray">
                                    <span className="bi bi-arrow-bar-left"></span>
                                    <span className="fs7">Mobiles & Accessories</span>
                                </p>
                                <p className="ms-3 fs7">Mobiles</p>
                            </div>
                        </div>
                        <div className="row pt-2 border pt-2 pb-2 border-bottom-1 font-bold">
                            <p className="fs7">PRICE</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <select className="sltBox fs7">
                                    {
                                        minprice.map(minimum =>
                                            <option value={minimum} key={minimum} onChange={MinPriceHandle}>{(minimum === "Min") ? "Min" : "$" + minimum}</option>
                                        )
                                    }
                                </select>
                                <p className="fs7 text-gray">to</p>
                                <select className="sltBox fs7">
                                    {
                                        maxprice.map(maximum =>
                                            <option value={maximum} key={maximum}>{(maximum === "Max") ? "Max" : "$" + maximum}</option>
                                        )
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="row pt-2 border pt-2 pb-2 border-bottom-1">
                            <p className="fs7 font-bold">BRAND</p>
                            <div className="form-check ms-3">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">Realme</label>
                            </div>
                        </div>
                        <div className="row pt-2 border pt-2 pb-2 border-bottom-1">
                            <p className="fs7 font-bold">BRAND</p>
                            <div className="form-check ms-3">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">Realme</label>
                            </div>
                        </div>
                        <div className="row pt-2 border pt-2 pb-2 border-bottom-1">
                            <p className="fs7 font-bold">BRAND</p>
                            <div className="form-check ms-3">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">Realme</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-9 bg-white">
                    {

                    }
                </div>
            </div>
        </div>
    )
}

export default Sort;
