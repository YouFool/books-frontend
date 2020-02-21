import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "react-bootstrap";

const KeyValueInput = props => {
  return (
    <Row>
      <Col>
        <label htmlFor={props.id}>{props.title}</label> <span />
      </Col>
      <Col>
        <input id={props.id} readOnly={props.readOnly} value={props.value} />
      </Col>
    </Row>
  );
};

KeyValueInput.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  readOnly: PropTypes.bool,
  value: PropTypes.string
};

export default KeyValueInput;
