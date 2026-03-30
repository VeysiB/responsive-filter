import React from "react";

const Card = ({ item }) => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        {item.map((val) => (
          <div
            className="card p-3"
            style={{ width: "18rem", backgroundColor: "#303030" }}
            key={val.id}
          >
            <img
              src={val.img}
              alt={val.tilte}
              style={{ border: "1px solid black", backgroundColor: "white" }}
              className="card-img-top"
            />
            <div
              className="card-body"
              style={{ border: "1px solid black", backgroundColor: "white" }}
            >
              <h5 className="card-title">
                {val.title} - {val.price}$
              </h5>
              <p className="card-text">{val.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
