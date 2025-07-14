import React, { useState } from "react";
import {
  Container,
  Table,
  Spinner,
  Alert,
  Form,
  Button,
} from "react-bootstrap";
import useFetch from "../useFetch";

const Enquiries = () => {
  const [secret, setSecret] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);

  const handleChecksecret = () => {
    if (secret.trim() === "secretadmin") {
      setIsAuthorized(true);
    } else {
      alert("Not an authorized user!");
    }
  };

  const { data, loading, error } = useFetch(
    isAuthorized ? "https://client-backend-ten.vercel.app/client" : null
  );
  console.log(data);
  return (
    <Container className="py-5">
      <h2 className="mb-4">Admin Enquiries Panel</h2>

      {!isAuthorized ? (
        <Form className="mb-4">
          <Form.Group className="mb-3" controlId="secretInput">
            <Form.Label>Enter Secret Key to View Enquiries:</Form.Label>
            <Form.Control
              type="password"
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
              placeholder="Enter Secret Key"
            />
          </Form.Group>
          <Button variant="primary" onClick={handleChecksecret}>
            Submit
          </Button>
        </Form>
      ) : (
        <>
          {loading && (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}

          {error && <Alert variant="danger">Error: {error.message}</Alert>}

          {data && data.length > 0 ? (
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Class & Board</th>
                  <th>Course Interested</th>
                </tr>
              </thead>
              <tbody>
                {data.map((entry, index) => (
                  <tr key={entry._id || index}>
                    <td>{index + 1}</td>
                    <td>{entry.name}</td>
                    <td>{entry.email}</td>
                    <td>{entry.phone}</td>
                    <td>{entry.classBoard}</td>
                    <td>{entry.course}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            !loading && <p>No enquiries found.</p>
          )}
        </>
      )}
    </Container>
  );
};

export default Enquiries;
