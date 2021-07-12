import React from "react";
import { TextField, Typography } from "@material-ui/core";
import { SocialIcon } from "react-social-icons";


export function Social() {
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
