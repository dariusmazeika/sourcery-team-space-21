import React from "react";
import PropTypes from "prop-types";
import { BirthdayCard } from "../BirthdayCard";
import { StoriesPost } from "../StoriesPost";
import Masonry from "react-masonry-css";
import styles from "./_mansonry.module.scss";

export const NewsAndStoriesSections = ({ stories }) => {
  const breakpointColumnsObj = {
    default: 3,
    1400: 3,
    1100: 2,
    900: 1,
  };

  return (
    <>
      <h3>News and Stories</h3>
      <div>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className={styles.masonryGrid}
          columnClassName={styles.masonryGridColumn}
        >
          {stories?.map((story) => (
            <div key={story.id}>
              {story.type === "birthday" ? (
                <BirthdayCard data={story} />
              ) : (
                <StoriesPost data={story} />
              )}
            </div>
          ))}
        </Masonry>
      </div>
    </>
  );
};

NewsAndStoriesSections.propTypes = {
  stories: PropTypes.array,
};
