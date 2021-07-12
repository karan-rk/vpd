import React from "react";
import Button from "@material-ui/core/Button";
import { motion } from "framer-motion";
import logo from "./assets/logo.jpeg";

export function Header() {
  return (
    <motion.header initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <motion.img
        animate={{ height: "50vh" }}
        transition={{ delay: 2 }}
        src={logo}
        alt="logo" />
      <motion.nav initial={{ y: 10 }} animate={{ y: 0 }}>
        <Button href="#services">Services</Button>
        <Button href="#contact">Contact us</Button>
        <Button href="#works">Works</Button>
      </motion.nav>
    </motion.header>
  );
}
