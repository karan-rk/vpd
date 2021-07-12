import React from "react";
import { Header } from "./Header";
import { Social } from "./Social";
import { Works } from "./Works";
import { Services } from "./Services";
import { Featured } from "./Featured";
import { About } from "./About";

export function Home() {
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
