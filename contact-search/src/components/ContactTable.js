import React from "react";

const ContactTable = ({ contacts, onSelect }) => {
  return (
    <table className="contact-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>DOB</th>
          <th>Address</th>
          <th>City</th>
          <th>State</th>
          <th>Zip</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Select</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact, index) => (
          <tr key={index}>
            <td>{contact.name}</td>
            <td>{contact.dob}</td>
            <td>{contact.address}</td>
            <td>{contact.city}</td>
            <td>{contact.state}</td>
            <td>{contact.zip}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
            <td>
              <button onClick={() => onSelect(contact)}>Select</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactTable;
