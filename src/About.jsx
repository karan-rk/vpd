import React from "react";
import { Typography } from "@material-ui/core";
import { motion } from "framer-motion";
import { useInViewAnim } from "./useInViewAnim";


export function About() {
  const [ref, controller] = useInViewAnim();

  return (
    <motion.div animate={controller} className="about" ref={ref}>
      <Typography variant="h4">About us</Typography>
      <Typography paragraph>
        VDP solns is a digital service provider that aims to provide software,
        designing and marketing solutions to individuals and businesses. At VDP,
        it is believed that service and quality is the key to success. Founded
        and Funded by Graphic designers from Jahirathu Junction, VDP solns has
        now set a new path towards Digital Solutions.
      </Typography>
    </motion.div>
  );
}
