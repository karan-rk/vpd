import React from "react";
import { Typography } from "@material-ui/core";

import AliceCarousel from "react-alice-carousel";

import { images } from "./App";

export function Featured() {
  return (
    <div className="featured">
      <Typography variant="h4">Featured Works</Typography>
      <AliceCarousel duration={4000} autoPlay fadeOutAnimation mouseDragEnabled>
        {images.map((im, i) => (
          <img key={i} src={im} alt="" />
        ))}
      </AliceCarousel>
    </div>
  );
}
