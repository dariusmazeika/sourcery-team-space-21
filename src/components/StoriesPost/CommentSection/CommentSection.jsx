import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { CommentForm } from "./CommentForm";
import styles from "./commentSection.module.scss";

export const CommentsSection = ({ commentsData = [], id = "" }) => {
  let [comments, setComments] = useState(commentsData);

  useEffect(() => {
    comments.forEach((comment) => {
      formatDateAndTime(comment);
    });
  }, []); // eslint-disable-line

  const updateCommentsUI = (comment) => {
    formatDateAndTime(comment);
    setComments((oldData) => [comment, ...oldData]);
  };

  const formatDateAndTime = (comment) => {
    const formattedDates = {
      date: "",
      time: "",
    };
    const date = new Date(`${comment.date}`).toLocaleDateString();
    const time = new Date(`${comment.date}`)
      .toLocaleTimeString("en-US")
      .split(" ");

    const timeToFormat = time[0].split(":").splice(0, 2).join(":");
    const formatTime = timeToFormat.concat(` ${time[1]}`);

    formattedDates.date = date;
    formattedDates.time = formatTime;

    comment.date = formattedDates;
  };

  return (
    <div>
      {comments.length > 0 && <div className={styles.separationLine} />}
      {comments && (
        <section className={styles.commentSection}>
          {comments.map((comment, index) => (
            <div
              key={`${comment.userName} ${index}`}
              className={styles.commentContainer}
            >
              <div>
                <div className={styles.commentDate}>
                  <div className={styles.commentDateUserName}>
                    {comment.userName}
                  </div>
                  <div>
                    <span>{comment.date.date}</span>
                    <span className={styles.commentDateTime}>
                      {comment.date.time}
                    </span>
                  </div>
                </div>
                <div>{comment.comment}</div>
              </div>
            </div>
          ))}
        </section>
      )}
      {comments.length > 0 && <div className={styles.separationLine} />}
      <CommentForm id={id} updateCommentsUI={updateCommentsUI} />
    </div>
  );
};

CommentsSection.propTypes = {
  id: PropTypes.string,
  commentsData: PropTypes.array,
};
