import React from "react";

const SelectedContact = ({ contact }) => {
  if (!contact) {
    return <div className="selected-contact">No contact selected</div>;
  }

  return (
    <div className="selected-contact">
      <h3>Selected Contact</h3>
      <p><strong>Name:</strong> {contact.name}</p>
      <p><strong>Email:</strong> {contact.email}</p>
      <p><strong>DOB:</strong> {contact.dob}</p>
      <p><strong>Phone:</strong> {contact.phone}</p>
      <p><strong>Address:</strong> {contact.address}, {contact.city}, {contact.state} {contact.zip}</p>
    </div>
  );
};

export default SelectedContact;
