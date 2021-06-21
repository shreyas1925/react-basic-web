import React from "react";

const Cards = (props) => {
  return (
    <>
      <div className="col-md-4 col-sm-4 col-10 mx-auto">
        <div class="card m-2">
          <img
            class="card-img-top"
            src={props.img}
            alt="Card image cap"
            className="img-fluid"
          />
          <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-outline-info">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cards;
