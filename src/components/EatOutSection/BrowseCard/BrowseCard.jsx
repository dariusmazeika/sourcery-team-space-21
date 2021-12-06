import React from "react";
import BlankCard from "../BlankCard/BlankCard";
import BrowseCardContent from "./BrowseCardContent";

export const BrowseCard = () => {
  return <BlankCard cardContent={<BrowseCardContent />}></BlankCard>;
};

export default BrowseCard;
