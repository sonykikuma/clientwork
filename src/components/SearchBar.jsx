import React from "react";
import { Form, InputGroup, Button, Row, Col } from "react-bootstrap";

const SearchBar = () => (
  <Row className="justify-content-center mt-4">
    <Col xs={11} sm={10} md={8} lg={6}>
      <InputGroup>
        {/* City dropdown */}
        <Form.Select aria-label="Select city" style={{ maxWidth: 180 }}>
          {["Chennai", "Bangalore", "Hyderabad", "Pune", "Online"].map(
            (city) => (
              <option key={city}>{city}</option>
            )
          )}
        </Form.Select>

        {/* Keyword box */}
        <Form.Control placeholder="Type Keyword to Search…" />

        {/* Search button */}
        <Button variant="danger">
          <i className="bi bi-search" />{" "}
          {/* or FontAwesome / plain “🔍” text */}
        </Button>
      </InputGroup>
    </Col>
  </Row>
);

export default SearchBar;
