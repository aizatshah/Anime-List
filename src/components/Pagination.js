import React from "react";
import { Link } from "react-router-dom";

export default function Pagination({ animePerPage, totalAnime, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalAnime / animePerPage); i++) {
    pageNumbers.push(i);
  }
  //   console.log(pageNumbers);
  return (
    <div className="pagination">
      <a href="./">&laquo;</a>
      {pageNumbers.map((number) => (
        <Link to="./" onClick={() => paginate(number)}>
          {number}
        </Link>
      ))}
      <a href="./">&raquo;</a>
    </div>
  );
}
