import React from "react";

import { createTheme, ThemeProvider } from "@material-ui/core";

import "./css/main.css";
import "react-alice-carousel/lib/alice-carousel.css";

import i1 from "./assets/s-1.jpg";
import i2 from "./assets/s-2.jpg";
import i3 from "./assets/s-3.jpg";
import i4 from "./assets/s-4.jpg";
import i5 from "./assets/s-5.jpg";
import i6 from "./assets/s-6.jpg";
import i7 from "./assets/s-7.jpg";
import { Home } from "./Home";
// import { HashRouter as Router, Switch, Route } from "react-router-dom";
export const images = [i1, i2, i3, i4, i5, i6, i7];

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
  // return (
  //   <ThemeProvider theme={theme}>
  //     <Router>
  //       <Switch>
  //         <Route path="/" exact>
  //           <Home />
  //         </Route>
  //         <Route path="/admin">
  //           <Admin />
  //         </Route>
  //       </Switch>
  //     </Router>
  //   </ThemeProvider>
  // );
}

// function Admin() {
//   return <div className="admin"></div>;
// }

export default App;
