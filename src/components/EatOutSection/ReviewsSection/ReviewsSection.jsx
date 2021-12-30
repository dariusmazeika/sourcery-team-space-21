import React from "react";
import PropTypes from "prop-types";

import { Review } from "./Review";

import styles from "./ReviewsSection.module.scss";

export const ReviewsSection = ({ reviews }) => (
  <section className={styles.reviewsSection}>
    <h2 className="heading2-alt">Reviews</h2>
    <div className={styles.reviewsContainer}>
      {reviews.slice(0, 3).map((review, i) => (
        <Review key={i} data={review} />
      ))}
    </div>
  </section>
);

ReviewsSection.propTypes = {
  reviews: PropTypes.array,
};
