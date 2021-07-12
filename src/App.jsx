import React from "react";

import Button from "@material-ui/core/Button";
import {
  createTheme,
  TextField,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import { useInView } from "react-hook-inview";
import { SocialIcon } from "react-social-icons";
import { motion, useAnimation } from "framer-motion";

import "./css/main.css";
import "react-alice-carousel/lib/alice-carousel.css";
import logo from "./assets/logo.jpeg";
import { useEffect } from "react";

import AliceCarousel from "react-alice-carousel";
import i1 from "./assets/s-1.jpg";
import i2 from "./assets/s-2.jpg";
import i3 from "./assets/s-3.jpg";
import i4 from "./assets/s-4.jpg";
import i5 from "./assets/s-5.jpg";
import i6 from "./assets/s-6.jpg";
import i7 from "./assets/s-7.jpg";

const images = [i1, i2, i3, i4, i5, i6, i7];

function App() {
  const theme = createTheme({
    palette: {
      type: "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

function Home() {
  return (
    <div className="app">
      <Header />
      <About />
      <Featured />
      <Services />
      <Works />
      <Social />
    </div>
  );
}

function Header() {
  return (
    <motion.header initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <img src={logo} alt="logo" />
      <motion.nav initial={{ y: 10 }} animate={{ y: 0 }}>
        <Button href="#services">Services</Button>
        <Button href="#contact">Contact us</Button>
        <Button href="#works">Works</Button>
      </motion.nav>
    </motion.header>
  );
}

function useInViewAnim(threshold) {
  const [ref, isVisible] = useInView({
    threshold: threshold || 0.5,
    // unobserveOnEnter:true,
  });
  const controller = useAnimation();

  useEffect(() => {
    if (controller) {
      controller.set({ opacity: 0, y: 10 });
      if (isVisible) {
        controller.start({
          opacity: 1,
          y: 0,
        });
      }
      if (!isVisible) {
        controller.set({ opacity: 0, y: 10 });
      }
    }
  }, [isVisible, controller]);
  return [ref, controller];
}

function About() {
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

function Featured() {
  const [ref, controller] = useInViewAnim(1);
  return (
    <motion.div animate={controller} ref={ref} className="featured">
      <Typography variant="h4">Featured Works</Typography>
      <AliceCarousel duration={4000} autoPlay fadeOutAnimation mouseDragEnabled>
        {images.map((im, i) => (
          <img key={i} src={im} alt="" />
        ))}
      </AliceCarousel>
    </motion.div>
  );
}

function Services() {
  const [ref, controller] = useInViewAnim();
  return (
    <motion.div
      id="services"
      ref={ref}
      animate={controller}
      className="services"
    >
      <Typography variant="h4">Services</Typography>

      <div className="services-container">
        <div className="service">
          <Typography variant="h6">Development</Typography>
          <Typography paragraph>
            We develop responsive, functional and super-fast websites. We keep
            User Experience in mind while creating websites. A website should
            load quickly and should be accessible even on a small view-port and
            slow internet connection
          </Typography>
        </div>
        <div className="service">
          <Typography variant="h6">Mobile Application</Typography>
          <Typography paragraph>
            We offer a wide range of professional Android, iOS & Hybrid app
            development services for our global clients, from a start up to a
            large enterprise.
          </Typography>
        </div>
        <div className="service">
          <Typography variant="h6">Design</Typography>
          <Typography paragraph>
            We offer professional Graphic design, Brochure design & Logo design.
            We are experts in crafting visual content to convey the right
            message to the customers. We also design custom wraps for your
            products(also known as package designing)
          </Typography>
        </div>
        <div className="service">
          <Typography variant="h6">Consultancy</Typography>
          <Typography paragraph>
            We are here to provide you with expert advice on your design and
            development requirement.
          </Typography>
        </div>
        <div className="service">
          <Typography variant="h6">Videos</Typography>
          <Typography paragraph>
            We create a polished professional video that impresses your
            audience.
          </Typography>
        </div>
        <div className="service">
          <Typography variant="h6">Product photoshoot</Typography>
          <Typography paragraph>
            We create a polished professional photo of the products that
            impresses your audience.
          </Typography>
        </div>
        <div className="service">
          <Typography variant="h6">Social media management</Typography>
          <Typography paragraph>
            We will manage your social media with graphically impressive posts
            and stories that helps you get better leads and increases popularity
          </Typography>
        </div>
      </div>
    </motion.div>
  );
}

function Works() {
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

function Work({ s, i }) {
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

function Social() {
  return (
    <div className="social" id="contact">
      <Typography variant="h4">Contact us</Typography>
      <Typography paragraph>
        we would love to hear it from you on your query and Contact
      </Typography>
      <form action="POST">
        <TextField margin="dense" variant="outlined" label="name" fullWidth />
        <TextField margin="dense" variant="outlined" label="number" fullWidth />
        <TextField margin="dense" variant="outlined" label="email" fullWidth />
        <TextField variant="outlined" label="message" multiline fullWidth />
      </form>
      <div>
        <SocialIcon className="sicon" url="https://instagram.com/" />
        <SocialIcon className="sicon" url="https://www.linkedin.com/in/" />
        <SocialIcon className="sicon" url="https://twitter.com/" />
        <SocialIcon className="sicon" network="telegram" url="https://t.me/" />
      </div>
    </div>
  );
}

export default App;
