import React from "react";

const Cards = ({ item }) => {
  return (
    <div className=" p-3 mt-4, my-3 ml-4 ">
      <div className="card bg-base-100 w-96 shadow-xl hover:scale-105 duration-200">
        <figure>
          <img src={item.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">${item.price}</div>
            <div className="badge badge-outline hover:bg-stone-500 cursor-pointer">
              BUY NOW
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
