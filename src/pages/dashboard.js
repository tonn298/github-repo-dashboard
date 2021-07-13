import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { getGithubRepositories } from "../services/requests";

import RepositoriesTable from "../components/RepositoriesTable";
import Pagination from "../components/Pagination";
import { makeAnArrayOfNumberFromOneToThis, calcPages } from "../utils";

const DashboardStyled = styled.div``;

const Dashboard = () => {
  const [repositories, setRepositories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [repositoriesPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [pagesArray, setPagesArray] = useState([]);

  const getRepositoriesData = async () => {
    const response = await getGithubRepositories();
    setRepositories(response);
  };

  useEffect(() => {
    setIsLoading(true);
    getRepositoriesData();
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const total = calcPages(repositories.length, repositoriesPerPage);
    const pages = makeAnArrayOfNumberFromOneToThis(total);
    setTotalPages(total);
    setPagesArray(pages);
  }, [repositories]);

  // get current repositories
  const indexOfLastRepository = currentPage * repositoriesPerPage;
  const indexOfFirstRepository = indexOfLastRepository - repositoriesPerPage;
  const currentRepositories = repositories.slice(
    indexOfFirstRepository,
    indexOfLastRepository
  );
  // change page
  const changePage = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <DashboardStyled className="dashboard-container">
      <h1>Github's public repositoies</h1>
      <RepositoriesTable
        repositories={currentRepositories}
        isLoading={isLoading}
      />
      <Pagination
        paginate={changePage}
        currentPage={currentPage}
        pagesArray={pagesArray}
      />
    </DashboardStyled>
  );
};

export default Dashboard;
