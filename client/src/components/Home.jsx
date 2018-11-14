import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import Footer from "./Footer";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Grid>
          <SectionOne />
          <SectionTwo />
          <SectionThree />
          <SectionFour />
          <Footer />
        </Grid>
      </div>
    );
  }
}
