import React from "react";
import { TextField, Typography } from "@material-ui/core";
import { SocialIcon } from "react-social-icons";
import { useState } from "react";
import { Button } from "@material-ui/core";
import { respond } from "./api";

export function Social() {
  const [input, setInput] = useState({});

  const submit = () => {
    respond(input);
  };

  return (
    <div className="social" id="contact">
      <Typography variant="h4">Contact us</Typography>
      <Typography paragraph>
        we would love to hear it from you on your query and Contact
      </Typography>
      <form action="POST">
        <TextField
          onChange={(e) => {
            setInput((oi) => {
              return { ...oi, name: e.target.value };
            });
          }}
          margin="dense"
          variant="outlined"
          label="name"
          fullWidth
        />
        <TextField
          onChange={(e) => {
            setInput((oi) => {
              return { ...oi, number: e.target.value };
            });
          }}
          margin="dense"
          variant="outlined"
          label="number"
          fullWidth
        />
        <TextField
          onChange={(e) => {
            setInput((oi) => {
              return { ...oi, email: e.target.value };
            });
          }}
          margin="dense"
          variant="outlined"
          label="email"
          fullWidth
        />
        <TextField
          onChange={(e) => {
            setInput((oi) => {
              return { ...oi, message: e.target.value };
            });
          }}
          variant="outlined"
          label="message"
          multiline
          fullWidth
        />
        <Button
          onClick={(e) => {
            e.preventDefault();
            submit();
          }}
        >
          Submit
        </Button>
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
