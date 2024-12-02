// src/components/SearchForm.js
import React from "react";
import "./SearchForm.css"; // Create a CSS file for custom styling

const SearchForm = ({ filters, onChange }) => {
  return (
    <div className="search-form">
      <h3>Search Contacts</h3>
      <form className="search-form-grid">
        {/* Row 1: Name Inputs */}
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            value={filters.firstName}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            value={filters.lastName}
            onChange={onChange}
          />
        </div>

        {/* Row 2: Date of Birth and Email */}
        <div className="form-group">
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={filters.dob}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            value={filters.email}
            onChange={onChange}
          />
        </div>

        {/* Row 3: Phone and Address */}
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            value={filters.phone}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Address"
            value={filters.address}
            onChange={onChange}
          />
        </div>

        {/* Row 4: City, State, Zip */}
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City"
            value={filters.city}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State</label>
          <input
            type="text"
            id="state"
            name="state"
            placeholder="State"
            value={filters.state}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="zip">Zip Code</label>
          <input
            type="text"
            id="zip"
            name="zip"
            placeholder="Zip Code"
            value={filters.zip}
            onChange={onChange}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
