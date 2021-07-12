import React, { useEffect } from "react";
import styled from "styled-components";
import RepositoryRow from "./RepositoryRow";

const RepositoriesStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderStyled = styled.header`
  display: grid;
  grid-template-columns: 2.5fr 1fr 1.5fr;
  margin: 12px 12px 0 12px;
  padding-bottom: 12px;
  border-bottom: 2px solid #111;
  > * {
    font-weight: bold;
    font-size: 24px;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    .owner {
      display: none;
    }
  }
`;

const TableContentStyled = styled.div``;

const LoadingStyled = styled.div``;

const RepositoriesTable = ({ isLoading, repositories }) => {
  return (
    <RepositoriesStyled>
      <HeaderStyled className="table-header">
        <div className="name">Name</div>
        <div className="owner">Owner</div>
        <div className="last-update">Informations</div>
      </HeaderStyled>
      {isLoading ? (
        <LoadingStyled>Loading</LoadingStyled>
      ) : (
        <TableContentStyled className="table-body">
          {repositories.map((each, idx) => {
            return <RepositoryRow data={each} className={`item-${idx}`} />;
          })}
        </TableContentStyled>
      )}
    </RepositoriesStyled>
  );
};

export default RepositoriesTable;
