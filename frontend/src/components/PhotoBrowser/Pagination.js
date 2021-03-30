import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./PhotoBrowser.module.css";

function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.centerPagination}>
      <div className={styles.pagination}>
        {pageNumbers.map((number) => (
          <NavLink
            onClick={() => paginate(number)}
            to={"/explore"}
            className="page-link"
            key={number}
          >
            {number}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Pagination;
