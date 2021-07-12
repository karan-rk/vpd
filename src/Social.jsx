import React from "react";
import { TextField, Typography } from "@material-ui/core";
import { SocialIcon } from "react-social-icons";
import { useState } from "react";
import { Button } from "@material-ui/core";
import { respond } from "./api";

export function Social() {
  const [input, setInput] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  const submit = () => {
    if (input.name && input.number && input.email && input.message) {
      respond(input)
        .then(() => {
          alert("your response has been recorded");
          setInput({
            name: "",
            number: "",
            email: "",
            message: "",
          });
        })
        .catch(() => {
          alert("your response has failed to be recorded");
        });
    } else {
      alert("enter all fields");
    }
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
          value={input.name}
          fullWidth
        />
        <TextField
          onChange={(e) => {
            setInput((oi) => {
              return { ...oi, number: e.target.value };
            });
          }}
          value={input.number}
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
          value={input.email}
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
          value={input.message}
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
