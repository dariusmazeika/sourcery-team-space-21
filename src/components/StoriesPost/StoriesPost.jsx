import React from "react";
import ReactPlayer from "react-player";
import PropTypes from "prop-types";

import { BlankCard } from "components";

import { timeDifference } from "utils";

import styles from "./StoriesPost.module.scss";

export const StoriesPost = ({
  data: {
    id,
    userName,
    userImage,
    postLocation,
    postDate,
    postImage,
    postVideo,
    postCover,
    likes,
    comments,
  },
}) => (
  <BlankCard className={styles.post}>
    <div className={styles.postHeader}>
      <div className={styles.postAuthorWrapper}>
        <img className={styles.postAuthorImage} src={userImage} alt="Author" />
        <p className={styles.postAuthor}>{userName}</p>
      </div>
      <div className={styles.postLocationDate}>
        <div clasName={styles.postLocation}>{postLocation}</div>
        <div className={styles.postDate}>{timeDifference(postDate)}</div>
      </div>
    </div>
    <div className={styles.postContent}>
      {postVideo ? (
        <ReactPlayer
          className={styles.reactPlayer}
          controls
          light={postCover}
          url={postVideo}
          width="100%"
          height="100%"
        />
      ) : (
        <img
          className={styles.postContentImage}
          src={postImage}
          alt={`Post by ${userName}`}
        />
      )}
    </div>
  </BlankCard>
);

StoriesPost.propTypes = {
  data: PropTypes.object,
};
