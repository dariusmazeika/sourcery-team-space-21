import React from "react";
import styles from "./birthday-card.module.scss";
import PropTypes from "prop-types";
import { BlankCard } from "components/EatOutSection/BlankCard/BlankCard";
import { Icon } from "components/iconSprite/Icon";
import confettiImage from "assets/birthday-card-confetti.png";

export const BirthdayCard = ({
  data: { userName, birthdayDate, userImage, wishes, comments },
}) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const bDayDate = new Date(birthdayDate);
  const Month = months[bDayDate.getMonth()];
  const Day = bDayDate.getDate();

  return (
    <BlankCard className={styles.birthDayCardContainer}>
      <div className={styles.birthdayCard}>
        <div
          className={styles.birthdayCardBackgroundImage}
          style={{ backgroundImage: `url(${confettiImage})` }}
        />
        <div
          className={styles.birthdayCardProfileImage}
          style={{ backgroundImage: `url(${userImage})` }}
        ></div>
        <div className={styles.birthdayCardUserName}>{userName}</div>
        <div className={styles.birthdayCardBirthday}>
          Celebrated a birthday on&nbsp;
          <div className={styles.birthdayCardBirthdayDate}>
            {Month} {Day}
          </div>
        </div>
        <div className={styles.birthdayCardWish}>Send a wish!</div>
        <hr className={styles.birthdayCardDivider}></hr>
        <div className={styles.birthdayCardBottom}>
          <Icon name="icon-other-gift" size="large" />
          <div className={styles.birthdayCardBottomWishes}>{wishes}</div>
          <Icon name="icon-message-box-circle" size="large" />
          <div className={styles.birthdayCardBottomComments}>
            {comments.length}
          </div>
        </div>
      </div>
    </BlankCard>
  );
};

BirthdayCard.propTypes = {
  data: PropTypes.object,
};
