import React from "react";

const SelectedContact = ({ contact }) => {
  if (!contact) {
    return <div className="selected-contact">No contact selected</div>;
  }

  return (
    <div className="selected-contact">
      <h3>Selected Contact</h3>
      <p><strong>Name:</strong> {contact.name || "N/A"}</p>
      <p><strong>Email:</strong> {contact.email || "N/A"}</p>
      <p><strong>DOB:</strong> {contact.dob || "N/A"}</p>
      <p><strong>Phone:</strong> {contact.phone || "N/A"}</p>
      <p><strong>Address:</strong> {contact.address || "N/A"}, {contact.city || "N/A"}, {contact.state || "N/A"} {contact.zip || "N/A"}</p>
    </div>
  );
};

export default SelectedContact;
