import React, { Component } from "react";
import { Grid, Col, Image } from "react-bootstrap";
import "./News.css";

export default class News extends Component {
  render() {
    return (
      <div>
        <Image
          src="http://www.thegeldartgroup.com/wp-content/themes/geldart/images/header-img-small.jpg"
          className="header-image-news"
        />
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <Image
              src="assets/pro-pic.jpg"
              className="about-profile-pic-news"
              rounded
            />
          </Col>
        </Grid>
      </div>
    );
  }
}
