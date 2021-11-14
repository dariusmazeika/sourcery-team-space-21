import React, { useState, useEffect } from "react";
import cx from "classnames";
import styles from "./_user-profile-widget.module.scss";
import userImage from "assets/user.png";
import imageMark from "assets/image-mark.png";
import { MenuItem } from "components/UserProfileWidget";

export const UserProfileWidget = () => {
  let [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((showMenuOld) => {
      return (showMenu = !showMenuOld);
    });
  };

  const toggleMenuOnWindowClick = () => {
    if (showMenu) {
      setShowMenu((showMenuOld) => {
        return (showMenu = !showMenuOld);
      });
    }
  };

  useEffect(() => {
    if (showMenu) {
      document.body.addEventListener("click", toggleMenuOnWindowClick);
    }
    return () => {
      window.removeEventListener("click", toggleMenuOnWindowClick);
    };
  });

  return (
    <div className={styles.userProfileWidget}>
      <div>
        <button
          onClick={toggleMenu}
          className={styles.userProfileWidgetMenuButton}
        >
          <img
            src={userImage}
            alt="user"
            className={styles.userProfileWidgetImage}
          />
          <img
            src={imageMark}
            alt="icon"
            className={styles.userProfileWidgetMark}
          />
        </button>
        <div
          className={cx(styles.userProfileMenu, {
            [styles.hideMenu]: showMenu === false,
          })}
        >
          <span className={styles.userProfileMenuPointer}>{}</span>
          <div className={styles.userProfileMenuButtons}>
            <MenuItem title="Settings" stylesClass="topButton" />
            <MenuItem title="Log out" stylesClass="bottomButton" />
          </div>
        </div>
      </div>
    </div>
  );
};
