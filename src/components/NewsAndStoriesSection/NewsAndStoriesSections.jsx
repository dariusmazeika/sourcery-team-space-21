import React from "react";
import PropTypes from "prop-types";
import { BirthdayCard } from "../BirthdayCard";
import { StoriesPost } from "../StoriesPost";
import Masonry from "react-masonry-css";
import "./mansonry.css";

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
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {stories?.map((story) => (
            <span key={story.id}>
              {story.type === "birthday" ? (
                <BirthdayCard data={story} />
              ) : (
                <StoriesPost data={story} />
              )}
            </span>
          ))}
        </Masonry>
      </div>
    </>
  );
};

NewsAndStoriesSections.propTypes = {
  stories: PropTypes.array,
};
