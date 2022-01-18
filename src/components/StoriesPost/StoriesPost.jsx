import React from "react";
import ReactPlayer from "react-player";
import PropTypes from "prop-types";

import { BlankCard } from "components";
import { CommentsSection } from "./CommentSection/CommentSection";

import { timeDifference } from "utils";

import styles from "./StoriesPost.module.scss";
import { FavoriteButton } from "components/favoriteButton/FavoriteButton";
import { Icon } from "components/iconSprite/Icon";

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
        <div>{postLocation}</div>
        <div className={styles.postDate}>{timeDifference(postDate)}</div>
      </div>
    </div>
    <div className={styles.postContent}>
      {postVideo ? (
        <ReactPlayer
          playing={true}
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
    <div className={styles.postStatistics}>
      <div className={styles.postStatisticsWrapper}>
        <FavoriteButton />
        <p className={styles.postStatisticsWrapperText}>{likes}</p>
      </div>
      <span className={styles.postStatisticsWrapperDivider} />
      <div className={styles.postStatisticsWrapper}>
        <Icon
          className={styles.postIcon}
          name="icon-message-box-circle"
          size="large"
        />
        <p className={styles.postStatisticsWrapperText}>{comments.length}</p>
      </div>
    </div>
    <CommentsSection id={id} commentsData={comments} />
  </BlankCard>
);

StoriesPost.propTypes = {
  data: PropTypes.object,
};
