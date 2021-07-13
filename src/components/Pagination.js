import React from "react";
import styled from "styled-components";

import Button from "../elements/Button";

const PaginationStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  select {
    background-color: transparent;
    margin: 0;
    width: 220px;
    font-size: 20px;
    line-height: inherit;
    border: 1px solid #aaa;
    padding: 15px;
  }
`;

const Pagination = ({ paginate, currentPage, pagesArray }) => {
  const movePageBy = (number) => {
    const gotoPage = Number(currentPage) + number;
    if (gotoPage <= 0 || gotoPage > pagesArray.length) {
      return;
    }

    paginate(gotoPage);
    document.getElementById("page").value = gotoPage;
  };

  return (
    <PaginationStyled data-testid="pagination">
      <Button text="<<" handleOnClick={() => movePageBy(-2)} />
      <Button text="<" handleOnClick={() => movePageBy(-1)} />
      <select
        className="page-dropdown"
        name="page"
        id="page"
        onChange={(e) => paginate(e.target.value)}
      >
        {pagesArray.map((number, id) => {
          return (
            <option key={id} data-testid={`option-${id}`} value={number}>
              Current page: {number}
            </option>
          );
        })}
      </select>
      <Button text=">" handleOnClick={() => movePageBy(1)} />
      <Button text=">>" handleOnClick={() => movePageBy(2)} />
    </PaginationStyled>
  );
};

export default Pagination;
