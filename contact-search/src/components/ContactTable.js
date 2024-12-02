import React from "react";
import "./ContactTable.css";

const ContactTable = ({ contacts, onSelect }) => {
  return (
    <div className="contact-table-container">
      <table className="contact-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip Code</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length > 0 ? (
            contacts.map((contact, index) => (
              <tr key={index} className="table-row">
                <td>{contact.name || "N/A"}</td>
                <td>{contact.dob || "N/A"}</td>
                <td>{contact.address || "N/A"}</td>
                <td>{contact.city || "N/A"}</td>
                <td>{contact.state || "N/A"}</td>
                <td>{contact.zip || "N/A"}</td>
                <td>{contact.email || "N/A"}</td>
                <td>{contact.phone || "N/A"}</td>
                <td>
                  <button
                    className="select-button"
                    onClick={() => onSelect(contact)}
                  >
                    Select
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9" className="no-results">
                No contacts found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ContactTable;
