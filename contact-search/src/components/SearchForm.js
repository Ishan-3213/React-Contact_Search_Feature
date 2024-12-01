// src/components/SearchForm.js
import React from "react";

const SearchForm = ({ filters, onChange }) => {
  return (
    <div className="search-form">
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={filters.firstName}
        onChange={onChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={filters.lastName}
        onChange={onChange}
      />
      <input
        type="date"
        name="dob"
        value={filters.dob}
        onChange={onChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={filters.email}
        onChange={onChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={filters.phone}
        onChange={onChange}
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={filters.address}
        onChange={onChange}
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={filters.city}
        onChange={onChange}
      />
      <input
        type="text"
        name="state"
        placeholder="State"
        value={filters.state}
        onChange={onChange}
      />
      <input
        type="text"
        name="zip"
        placeholder="Zip Code"
        value={filters.zip}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchForm;
