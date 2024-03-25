import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import deleteIcon from "../assets/delete.png"
import { removeFromCart } from "../redux/cartReducer";

function Header() {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.items);
  const totalBill = parseInt(cartItems.reduce((acc, item) => acc + item.price , 0))
  console.log(cartItems);
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="container">
            <Link
              className="navbar-brand"
              style={{ paddingTop: 12, paddingBottom: 0 }}
              to="/"
            >
              <i className="bi bi-bag-heart" />
            </Link>
            <ul className="navbar-nav item-bar d-flex me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/Home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Products">
                  Products
                </Link>
              </li>
            </ul>
            <button
              className="navbar-toggler cart-btn"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <a className="nav-link active" aria-current="page" href="#">
                <i className="bi bi-cart" />
              </a>
              <span
                className="position-absolute bg-dark translate-middle badge rounded-pill"
                style={{ top: 20, left: "94%" }}
              >
                {cartItems.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabIndex={-1}
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  Cart
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
              <div className="offcanvas-body mt-4">
                <div className="cart-list d-flex flex-column gap-4">
                  {cartItems.map( (item , ind) => {
                    return(
                      <div className="cart-list-item d-flex align-items-center justify-content-between gap-4">
                        <div>
                          <h6>{item.title}</h6>
                          <p className="fw-bold">${item.price}</p>
                          <button className="btn btn-warning p-1 py-0" 
                          onClick={(e) => dispatch(removeFromCart(item))}>
                            <img src={deleteIcon} width={'20px'} alt="" />
                          </button>
                        </div>
                        <div>
                          <img src={item.image} width={'60px'} alt="" />
                        </div>
                      </div>
                    )
                  } ) }
                </div>
                <div className="d-flex justify-content-between mt-5">
                  {
                    cartItems.length === 0 ? 
                    <h4 className="text-center">No items in cart</h4> 
                    :
                    <>
                      <h4>Total : </h4>
                      <h4 className="fw-bold">$ {totalBill}</h4>
                    </>

                  }
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* /.header */}
    </>
  );
}

export default Header;
