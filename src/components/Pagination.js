import React, { useState, useEffect } from "react";
import styled from "styled-components";

// import DropDown from "../elements/DropDown";
import Button from "../elements/Button";

const PaginationStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  select {
    background-color: transparent;
    margin: 0;
    width: 250px;
    font-size: 20px;
    line-height: inherit;
    border: 1px solid #aaa;
    padding: 15px;
  }
`;

const Pagination = ({
  repositoriesPerPage,
  totalRepositories,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (
    let i = 1;
    i <= Math.ceil(totalRepositories / repositoriesPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  const movePageBy = (number) => {
    const gotoPage = currentPage + number;
    if (gotoPage <= 0 || gotoPage > pageNumbers.length) {
      alert("cannot go to that page");
      return;
    }

    paginate(gotoPage);
    document.getElementById("page").value = gotoPage;
  };

  return (
    <PaginationStyled>
      <Button text="<<" handleOnClick={() => movePageBy(-2)} />
      <Button text="<" handleOnClick={() => movePageBy(-1)} />
      <select
        className="page-dropdown"
        name="page"
        id="page"
        onChange={(e) => paginate(e.target.value)}
      >
        {pageNumbers.map((number) => {
          return <option value={number}>Current Page: {number}</option>;
        })}
      </select>
      <Button text=">" handleOnClick={() => movePageBy(1)} />
      <Button text=">>" handleOnClick={() => movePageBy(2)} />
    </PaginationStyled>
  );
};

export default Pagination;
