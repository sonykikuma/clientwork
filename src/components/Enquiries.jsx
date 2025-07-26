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

  const handleDownload = () => {
    if (!data || data.length === 0) return;

    const headers = [
      "Name",
      "Email",
      "Phone",
      "Class & Board",
      "Course Interested",
    ];
    const rows = data.map((entry) => [
      entry.name,
      entry.email,
      entry.phone,
      entry.classBoard,
      entry.course,
    ]);

    let csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((row) => row.join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "enquiries.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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

          {/* {data && data.length > 0 ? ( */}
          {data && data.length > 0 && (
            <>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4>Enquiries List</h4>
                <Button variant="success" onClick={handleDownload}>
                  Download Enquiries
                </Button>
              </div>

              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Class & Board</th>
                    <th>Course Interested</th>
                    <th>Date</th>
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
                      <td>
                        {entry.createdAt
                          ? new Date(entry.createdAt).toLocaleString("en-IN", {
                              dateStyle: "medium",
                              timeStyle: "short",
                            })
                          : "N/A"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </>
          )}

          {data && data.length === 0 && !loading && <p>No enquiries found.</p>}
        </>
      )}
    </Container>
  );
};

export default Enquiries;
