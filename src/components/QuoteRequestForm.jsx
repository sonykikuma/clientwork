import React, { useState } from "react";
import { Card, Button, Form, ButtonGroup, ToggleButton } from "react-bootstrap";

const QuoteRequestForm = () => {
  const [mode, setMode] = useState("classroom");

  return (
    <Card className="shadow-sm border-0" bg="light">
      <Card.Body>
        <Card.Title className="text-center fw-semibold">
          Request for
          <br />
          Class Room &amp; Online Training Quotation
        </Card.Title>

        {/* ---- mode switch ---- */}
        <ButtonGroup className="d-flex mb-3">
          {[
            { id: "classroom", label: "📋 Class Room" },
            { id: "online", label: "💻 Online" },
          ].map((opt, idx) => (
            <ToggleButton
              key={opt.id}
              id={`mode-${opt.id}`}
              type="radio"
              variant={mode === opt.id ? "primary" : "outline-primary"}
              value={opt.id}
              checked={mode === opt.id}
              onChange={(e) => setMode(e.currentTarget.value)}
              className="flex-fill"
            >
              {opt.label}
            </ToggleButton>
          ))}
        </ButtonGroup>

        {/* ---- form ---- */}
        <Form>
          <Form.Control className="mb-2" placeholder="Enter Your Name" />
          <Form.Control
            className="mb-2"
            type="email"
            placeholder="Enter Your email"
          />
          <Form.Control className="mb-2" placeholder="Enter Your Mobile No." />

          <Form.Select className="mb-2">
            <option>Select Course</option>
            <option>Full Stack Developer</option>
            <option>Data Analytics</option>
            <option>Cloud Computing</option>
          </Form.Select>

          <Form.Select className="mb-3">
            <option>Select Your City</option>
            <option>Chennai</option>
            <option>Bangalore</option>
            <option>Hyderabad</option>
          </Form.Select>

          <div className="d-grid">
            <Button variant="primary" size="lg">
              Get Quotes
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default QuoteRequestForm;
