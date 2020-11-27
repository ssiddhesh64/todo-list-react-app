import React from "react";
import "./Loader.css";
import { Row, Column } from "./Grid";

const Loader = (props) => {
  return (
    <Row className="spinner">
      <Column className="bounce1"></Column>
      <Column className="bounce2"></Column>
      <Column className="bounce3"></Column>
    </Row>
  );
};
export default Loader;
