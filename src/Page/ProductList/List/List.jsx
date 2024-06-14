import React, { useState } from "react";
import Card from "../../../Components/Card/Card";
import "./index.css";
import { NavLink } from "react-router-dom";

const List = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Adjust this value to set how many items you want per page

  // Calculate the indices for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data
    .filter((item) => item.hide === true)
    .slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page change
  const handlePageChange = (event, pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate total pages
  const totalPages = Math.ceil(
    data.filter((item) => item.hide === true).length / itemsPerPage
  );

  return (
    <div className="list12">
      <div className="list">
        {currentItems.map((item) => (
          <div className="card1" key={item._id}>
            <NavLink to={`/products/${item._id}`}>
              <Card data={item} />
            </NavLink>
          </div>
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map((number) => (
        <button
          key={number}
          className={number === currentPage ? "active" : ""}
          onClick={(e) => onPageChange(e, number)}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default List;
