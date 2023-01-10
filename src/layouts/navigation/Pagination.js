import React from "react";
import "./Pagination.css";

const Pagination = (props) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
    pages.push(i);
  }

  function handleNextButtononClick() {
    props.setCurrentPage(props.currentPage +1);
  }

  function handleBackButtononClick() {
    props.setCurrentPage(props.currentPage - 1);
  }

  const totalPage = Math.ceil(props.totalPosts / props.postsPerPage);


  return (
    <div className="pagination">
    <button onClick={handleBackButtononClick} disabled={props.currentPage === 1}> &lt;&lt; </button>  
      {pages.map((page, index) => {
        return (    
          <button
            className={page === props.currentPage ? "active" : ""}
            key={index}
            onClick={() => {
              props.setCurrentPage(page);
            }}
          >
            {page}
          </button>
        );
      })}
      <button onClick={handleNextButtononClick} disabled={props.currentPage === totalPage}> &gt;&gt; </button>
    </div>
  );
};

export default Pagination;
