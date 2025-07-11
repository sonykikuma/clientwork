import React from "react";
import { Form, InputGroup, Button, Row, Col } from "react-bootstrap";

const SearchBar = () => (
  <Row className="justify-content-center mt-4">
    <Col xs={11} sm={10} md={8} lg={6}>
      <InputGroup>
        <Form.Select aria-label="Select city" style={{ maxWidth: 180 }}>
          {["Chennai", "Bangalore", "Hyderabad", "Pune", "Online"].map(
            (city) => (
              <option key={city}>{city}</option>
            )
          )}
        </Form.Select>

        <Form.Control placeholder="Type Keyword to Search…" />

        <Button variant="danger">
          <i className="bi bi-search" />{" "}
        </Button>
      </InputGroup>
    </Col>
  </Row>
);

export default SearchBar;
