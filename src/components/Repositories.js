import React from "react";
import styled from "styled-components";

const RepositoriesStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderStyled = styled.header`
  display: grid;
  grid-template-columns: 4fr 1fr 3fr;
  margin: 12px 12px 0 12px;
  padding-bottom: 12px;
  border-bottom: 2px solid #111;
  > * {
    font-weight: bold;
    font-size: 24px;
  }
`;

const TableContentStyled = styled.div``;

const RepositoryStyled = styled.div`
  display: grid;
  grid-template-columns: 4fr 1.5fr 2.5fr;
  margin: 12px 12px 0 12px;
  padding-bottom: 12px;
  border-bottom: 2px solid #aaa;
`;

const LoadingStyled = styled.div``;

const Repositories = ({ isLoading, repositories }) => {
  return (
    <RepositoriesStyled>
      <HeaderStyled className="table-header">
        <div className="name">Name</div>
        <div className="owner">Owner</div>
        <div className="last-update">Last Updated</div>
      </HeaderStyled>
      {isLoading ? (
        <LoadingStyled>Loading</LoadingStyled>
      ) : (
        <TableContentStyled className="table-body">
          {repositories.map((each, idx) => {
            return (
              <RepositoryStyled>
                <div className="repository-name">{each.name}</div>
                <div className="repository-owner">{each.owner.login}</div>
                <div className="repository-update">to be arrange</div>
              </RepositoryStyled>
            );
          })}
        </TableContentStyled>
      )}
    </RepositoriesStyled>
  );
};

export default Repositories;
