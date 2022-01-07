import React from "react";
import styles from "./birthday-card.module.scss";
import PropTypes from "prop-types";
import { BlankCard } from "components/EatOutSection/BlankCard/BlankCard";
import { Icon } from "components/iconSprite/Icon";
import confettiImage from "assets/birthday-card-confetti.png";

export const BirthdayCard = ({ data }) => {
  let month = data.birthdayDate.substring(5, 7);
  let day = data.birthdayDate.substring(8);

  switch (month) {
    case "1":
      month = "Jan";
      break;
    case "2":
      month = "Feb";
      break;
    case "3":
      month = "Mar";
      break;
    case "4":
      month = "Apr";
      break;
    case "5":
      month = "May";
      break;
    case "6":
      month = "Jun";
      break;
    case "7":
      month = "Jul";
      break;
    case "8":
      month = "Aug";
      break;
    case "9":
      month = "Sep";
      break;
    case "10":
      month = "Oct";
      break;
    case "11":
      month = "Nov";
      break;
    case "12":
      month = "Dec";
      break;
    default:
      month = "";
  }

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
          Celebrated a birthday on&nbsp;
          <b>
            {month} {day}
          </b>
        </div>
        <div className={styles.birthdayCardWish}>Send a wish!</div>
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
