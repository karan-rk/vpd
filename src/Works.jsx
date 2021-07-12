import React from "react";
import { Typography } from "@material-ui/core";
import { images } from "./App";
import { Work } from "./Work";


export function Works() {
  return (
    <div className="works" id="works">
      <Typography variant="h4">Our Works</Typography>

      <div className="work-grid">
        {images.map((s, i) => (
          <Work {...{ s, i }} />
        ))}
      </div>
    </div>
  );
}
