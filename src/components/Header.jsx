import Container from "react-bootstrap/Container";
import Badge from "@mui/material/Badge";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/esm/Table";
import { DLT } from "../redux/action/action";

const Header = () => {
  const getData = useSelector((state) => state.cartReducer.carts);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  const [price, setPrice] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [showEmail, setShowEmail] = useState(false);

  const avatarRef = useRef(null);
  const cartRef = useRef(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dlt = (id) => {
    dispatch(DLT(id));
  };

  const total = () => {
    let price = 0;
    getData.map((ele) => (price += ele.price));
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [getData]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (avatarRef.current && !avatarRef.current.contains(event.target)) {
        setShowEmail(false);
      }

      const cartIcon = document.getElementById("basic-button");
      const menu = document.getElementById("basic-menu");

      const clickedCartIcon = cartIcon && cartIcon.contains(event.target);
      const clickedMenu = menu && menu.contains(event.target);

      if (!clickedCartIcon && !clickedMenu) {
        setAnchorEl(null);
      }
    };

    const userEmail = localStorage.getItem("signupEmail") || "";
    setEmail(userEmail);

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const firstNameInitial =
    email && typeof email === "string"
      ? email.trim().charAt(0).toUpperCase()
      : "?";

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" style={{ height: "60px" }}>
        <Container>
          <NavLink
            to="/home"
            href="#home"
            className="text-decoration-none text-light"
          >
            Add To Cart
          </NavLink>

          <Nav className="me-auto">
            <NavLink
              to="/home"
              className="text-decoration-none text-light mx-3"
            >
              Home
            </NavLink>
          </Nav>

          <div className="my_avatar dropdown" title={email} ref={avatarRef}>
            <button
              type="button"
              className="btn"
              onClick={() => setShowEmail(!showEmail)}
            >
              {firstNameInitial}
            </button>
            {showEmail && (
              <div
                className="position-absolute bg-white border rounded shadow p-2"
                style={{
                  top: "110%",
                  right: 0,
                  minWidth: "200px",
                  zIndex: 999,
                }}
              >
                <p className="mb-0 text-dark fw-bold">{email}</p>
              </div>
            )}
          </div>

          <div ref={cartRef}>
            <Badge
              badgeContent={getData.length}
              color="primary"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <i
                className="fa-solid fa-cart-shopping text-light mt-2"
                style={{ fontSize: 25, cursor: "pointer" }}
              ></i>
            </Badge>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{ "aria-labelledby": "basic-button" }}
            >
              {getData.length ? (
                <div
                  className="card_details"
                  style={{ width: "24rem", padding: 10 }}
                >
                  <Table>
                    <thead>
                      <tr>
                        <th>Photo</th>
                        <th>Restaurant Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      {getData.map((e) => (
                        <tr key={e.id}>
                          <td>
                            <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                              <img
                                src={e.imgdata}
                                style={{ width: "5rem", height: "5rem" }}
                              />
                            </NavLink>
                          </td>
                          <td>
                            <p>{e.rname}</p>
                            <p>Price: {e.price}</p>
                            <p>Quantity: {e.qnty}</p>
                            <i
                              className="fas fa-trash text-danger"
                              style={{ cursor: "pointer" }}
                              onClick={() => dlt(e.id)}
                            ></i>
                          </td>
                          <td colSpan="2" className="text-center fw-bold">
                            Total: ₹{e.price * e.qnty}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              ) : (
                <div
                  className="card_details d-flex justify-content-center align-item-center"
                  style={{ width: "15rem", padding: 10, position: "relative" }}
                >
                  <i
                    className="fas fa-close smallclose"
                    onClick={handleClose}
                    style={{
                      position: "absolute",
                      top: 2,
                      right: 20,
                      fontSize: 23,
                      cursor: "pointer",
                    }}
                  ></i>
                  <p>Your cart is empty</p>
                  <img
                    src="https://github.com/harsh17112000/react_redux_cart_youtube/blob/main/public/cart.gif?raw=true"
                    className="emptycart_img"
                    style={{ width: "5rem", padding: 10 }}
                  />
                </div>
              )}
            </Menu>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
