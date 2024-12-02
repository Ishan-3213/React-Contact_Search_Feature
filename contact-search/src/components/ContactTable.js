import React from "react";
import "./ContactTable.css"; // Import custom styles

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
                <td>{contact.name}</td>
                <td>{contact.dob}</td>
                <td>{contact.address}</td>
                <td>{contact.city}</td>
                <td>{contact.state}</td>
                <td>{contact.zip}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
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
