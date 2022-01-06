import React from "react";
import styles from "./birthday-card.module.scss";
import PropTypes from "prop-types";
import { BlankCard } from "components/EatOutSection/BlankCard/BlankCard";
import { Icon } from "components/iconSprite/Icon";
import confettiImage from "assets/birthday-card-confetti.png";

export const BirthdayCard = ({ data }) => {
  return (
    <BlankCard className={styles.blankCard}>
      <div className={styles.birthdayCard}>
        <div
          className={styles.birthdayCardBackgroundImage}
          style={{ backgroundImage: `url(${confettiImage})` }}
        ></div>
        <div
          className={styles.birthdayCardProfileImage}
          style={{ backgroundImage: `url(${data.userImage})` }}
        ></div>
        <div className={styles.birthdayCardUserName}>{data.userName}</div>
        <div className={styles.birthdayCardBirthdayDate}>
          {data.birthdayDate}
        </div>
        <div className={styles.birthdayCardWish}>Send a wish</div>
        <hr className={styles.birthdayCardLine}></hr>
        <div className={styles.birthdayCardBottom}>
          <Icon name="icon-other-gift" size="large" />
          <div>{data.wishes}</div>
          <Icon name="icon-message-box-circle" size="large" />
          <div>{data.comments.length}</div>
        </div>
      </div>
    </BlankCard>
  );
};

BirthdayCard.propTypes = {
  data: PropTypes.object,
};
