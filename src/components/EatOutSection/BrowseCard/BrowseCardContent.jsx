import React from "react";
import { Button } from "components/button";
import styles from "./browse-card-content.module.scss";

export const BrowseCardContent = () => {
  return (
    <>
      <h3 className={styles.Heading}>
        View all your favourite lunch spots and more
      </h3>
      <Button size={"small"} kind={"primary"}>
        Browse List
      </Button>
    </>
  );
};

export default BrowseCardContent;
