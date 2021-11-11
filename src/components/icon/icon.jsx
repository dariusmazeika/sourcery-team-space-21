import React from "react";
import { Pause, Play, Stop } from "./library/index";

export default function Icon() {
  const Icons = (
    <div>
      <Pause />
      <Play />
      <Stop />
    </div>
  );

  return Icons;
}
