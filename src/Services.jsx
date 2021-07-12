import React from "react";
import { Typography } from "@material-ui/core";

export function Services() {
  return (
    <div id="services" className="services">
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
    </div>
  );
}
