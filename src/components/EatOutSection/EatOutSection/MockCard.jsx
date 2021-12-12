import React from "react";
import PropTypes from "prop-types";
import { BlankCard } from "../BlankCard/BlankCard";

export const MockCard = ({
  name = "restaurant",
  checkIns = 5,
  rating = 4.5,
  categories = ["snacks", "salads", "pizza"],
  openingHours = "10:00-21:00",
}) => {
  return (
    <BlankCard>
      <div style={{ padding: "4.2rem 4rem", height: "22.9rem" }}>
        <div
          style={{
            fontSize: "1.8rem",
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "2.8rem",
          }}
        >
          <span>Check Ins: {checkIns}</span>
          <span>Rating: {rating}</span>
        </div>
        <ul style={{ display: "flex", justifyContent: "space-between" }}>
          {categories.map((category, index) => (
            <li key={`${category}-${index}`}>{category}</li>
          ))}
        </ul>
        <h3>{name}</h3>
        <p>{openingHours}</p>
      </div>
    </BlankCard>
  );
};

MockCard.propTypes = {
  name: PropTypes.string,
  checkIns: PropTypes.number,
  rating: PropTypes.number,
  categories: PropTypes.array,
  openingHours: PropTypes.string,
};
