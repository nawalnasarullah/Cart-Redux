import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { addToCart } from "../redux/cartReducer";

function ProductMain() {
  
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch(); 

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <main className="main">
        <div className="container">
          <h1 className="mt-4">Products</h1>
          <div className="row mt-4 row-gap-5">
            {products.map((product) => (
              <Card key={product.id} product={product} onAddToCart={handleAddToCart}/>
            ))}
          </div>
          {/* /.row */}
        </div>
      </main>
      {/* /.main */}
    </>
  );
}

export default ProductMain;

function Card({ product, onAddToCart }) {
  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-3">
        <div className="card" style={{ border: "none" }}>
          <img className="rounded-0" src={product.image} alt="..." />
          <div className="card-body pt-5 px-0 py-2 d-flex flex-column justify-content-between" >
            <div>
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">
                {" "}
                {product.description}
              </p>
            </div>
            <div className="d-flex mt-5">
            <a style={{paddingLeft: 0}} href="" className="btn me-auto">PKR {product.price}</a>
            <button
              className="btn btn-primary ms-auto"
              style={{ backgroundColor: "#0067B8"}}
              onClick={() => onAddToCart(product)}
            >
              Add to cart
            </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
