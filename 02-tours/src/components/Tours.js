import React, { Component } from "react";
import Tour from "./Tour";

const Tours = ({ tours }) => {
  return (
    <section>
      {tours.map((tour) => {
        <h2>{tour.name}</h2>;
      })}
    </section>
  );
};
export default Tours;
