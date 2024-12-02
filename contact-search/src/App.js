import React, { useState } from "react";
import { contacts as data } from "./data";
import SearchForm from "./components/SearchForm";
import ContactTable from "./components/ContactTable";
import Pagination from "./components/Pagination";
import SelectedContact from "./components/SelectedContact";
import "./styles.css";

const App = () => {
  const [filters, setFilters] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const [filteredContacts, setFilteredContacts] = useState(data);
  const [selectedContact, setSelectedContact] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
    applyFilters({ ...filters, [name]: value });
  };

  const applyFilters = (filters) => {
    let result = data.filter((contact) => {
      return (
        contact.name.toLowerCase().includes(filters.firstName.toLowerCase()) &&
        contact.name.toLowerCase().includes(filters.lastName.toLowerCase()) &&
        (!filters.dob || contact.dob === filters.dob) &&
        contact.email.toLowerCase().includes(filters.email.toLowerCase()) &&
        contact.phone.includes(filters.phone) &&
        contact.address.toLowerCase().includes(filters.address.toLowerCase()) &&
        contact.city.toLowerCase().includes(filters.city.toLowerCase()) &&
        contact.state.toLowerCase().includes(filters.state.toLowerCase()) &&
        contact.zip.includes(filters.zip)
      );
    });
    setFilteredContacts(result);
    setCurrentPage(1);
  };

  const onPageChange = (page) => setCurrentPage(page);

  const paginatedContacts = filteredContacts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="app">
      <h1>Contact Search</h1>
      <SearchForm filters={filters} onChange={handleFilterChange} />
      <ContactTable
        contacts={paginatedContacts}
        onSelect={setSelectedContact}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredContacts.length / itemsPerPage)}
        onPageChange={onPageChange}
      />
      <SelectedContact contact={selectedContact} />
    </div>
  );
};

export default App;
