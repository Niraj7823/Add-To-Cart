import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/action/action";
import { DLT, REMOVE } from "../redux/action/action";
import { useNavigate } from "react-router-dom";

const CardDetails = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const getData = useSelector((state) => state.cartReducer.carts);
  const dispatch = useDispatch();

  const [data, setData] = useState([]);

  const compare = () => {
    let compareData = getData.filter((e) => {
      return e.id == id;
    });
    setData(compareData);
  };
  const send = (e) => {
    dispatch(ADD(e));
  };
  const remove = (item) => {
    dispatch(REMOVE(item));
  };
  const dlt = (id) => {
    dispatch(DLT(id));
    navigate("/Home");
  };

  useEffect(() => {
    compare();
  }, [id]);

  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Items Details Page</h2>
        <section className="container mt-3">
          <div className="iteamsdetails">
            {data.map((ele) => {
              return (
                <>
                  <div className="items_img">
                    <img src={ele.imgdata} />
                  </div>
                  <div className="details">
                    <Table>
                      <tr>
                        <td>
                          <p>
                            <strong>Restaurant :</strong>
                            {ele.rname}
                          </p>
                          <p>
                            <strong>Price :</strong>₹{ele.price}
                          </p>
                          <p>
                            <strong>Dishes :</strong>
                            {ele.address}
                          </p>
                          <p>
                            <strong>Total :{ele.price * ele.qnty}</strong>₹
                          </p>
                          <div
                            className="mt-5 d-flex justify-content-between align-items-center"
                            style={{
                              width: 100,
                              cursor: "pointer",
                              background: "#ddd",
                              color: "#111",
                            }}
                          >
                            <span
                              style={{ fontSize: 24 }}
                              onClick={() => remove(ele)}
                            >
                              -
                            </span>
                            <span style={{ fontSize: 22 }}>{ele.qnty}</span>
                            <span
                              style={{ fontSize: 24 }}
                              onClick={() => send(ele)}
                            >
                              +
                            </span>
                          </div>
                        </td>
                        <td>
                          <p>
                            <strong>Rating: </strong>
                            <span
                              style={{
                                background: "green",
                                color: "light",
                                padding: "2px 5px",
                                borderRadius: "5px",
                              }}
                            >
                              {ele.rating}★
                            </span>
                          </p>
                          <p>
                            <strong>Order Review: </strong>
                            <span>{ele.somedata}</span>
                          </p>
                          <p>
                            <strong>Remove:</strong>
                            <span>
                              <i
                                className="fas fa-trash"
                                onClick={() => dlt(ele.id)}
                                style={{
                                  color: "red",
                                  fontSize: 20,
                                  cursor: "pointer",
                                }}
                              ></i>
                            </span>
                          </p>
                        </td>
                      </tr>
                    </Table>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};
export default CardDetails;
