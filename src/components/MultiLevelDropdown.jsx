import React, { useState } from "react";
import { NavDropdown } from "react-bootstrap";
import PropTypes from "prop-types";
import "./MultiLevelDropdown.css";

/**
 * @param {string}   title  – top‑level label
 * @param {object[]} items  – [{ label, url?, children? }]
 */
const MultiLevelDropdown = ({ title, items }) => (
  <NavDropdown
    title={title}
    id={`${title.toLowerCase().replace(/\s+/g, "-")}-dropdown`}
  >
    {items.map((i) =>
      i.children ? (
        <NestedItem key={i.label} {...i} />
      ) : (
        <NavDropdown.Item key={i.label} href={i.url || "#"}>
          {i.label}
        </NavDropdown.Item>
      )
    )}
  </NavDropdown>
);

const NestedItem = ({ label, children }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={`dropdown-submenu nav-item ${show ? "show" : ""}`}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <span className="dropdown-item d-flex justify-content-between align-items-center">
        {label} <span className="ms-2">›</span>
      </span>

      <div className={`dropdown-menu ${show ? "show" : ""}`}>
        {children.map((c) =>
          c.children ? (
            <NestedItem key={c.label} {...c} />
          ) : (
            <a className="dropdown-item" key={c.label} href={c.url || "#"}>
              {c.label}
            </a>
          )
        )}
      </div>
    </div>
  );
};

MultiLevelDropdown.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

export default MultiLevelDropdown;
