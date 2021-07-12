import React from "react";
import { Typography } from "@material-ui/core";
import { motion } from "framer-motion";


export function Work({ s, i }) {
  return (
    <div className="work">
      <img src={s} alt="i" key={i} />
      <motion.div className="info">
        <Typography variant="h6">Lorem ipsum</Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          molestias odit, architecto fugit tenetur impedit!
        </Typography>
      </motion.div>
    </div>
  );
}
