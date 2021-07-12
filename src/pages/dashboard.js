import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { getGithubRepositories } from "../services/requests";

import Repositories from "../components/Repositories";
import Pagination from "../components/Pagination";

const DashboardStyled = styled.div`
  .loading {
  }
`;

const Dashboard = () => {
  const [repositories, setRepositories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [repositoriesPerPage, setRepositoriesPerPage] = useState(10);

  const getRepositoriesData = async () => {
    const response = await getGithubRepositories();
    setRepositories(response);
  };

  useEffect(() => {
    setIsLoading(true);
    getRepositoriesData();
    setIsLoading(false);
  }, []);

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
      <h1>REPOSITORIES</h1>
      {/* what show */}
      <Repositories repositories={currentRepositories} isLoading={isLoading} />
      <Pagination
        repositoriesPerPage={repositoriesPerPage}
        totalRepositories={repositories.length}
        paginate={changePage}
        currentPage={currentPage}
        isLoading={isLoading}
      />
    </DashboardStyled>
  );
};

export default Dashboard;
