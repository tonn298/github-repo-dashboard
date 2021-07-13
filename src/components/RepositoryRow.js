import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Button from "../elements/Button";

import { makeGetRequest } from "../services/requests";

const RepositoryRowStyled = styled.div`
  display: grid;
  grid-template-columns: 2.5fr 1fr 1.5fr;
  margin: 12px 12px 0 12px;
  padding-bottom: 12px;
  border-bottom: 2px solid #aaa;
  min-height: 150px;
  align-items: center;
  > .repository-name {
    > .project-name {
      font-size: 32px;
      font-weight: bold;
      color: #253e5e;
    }
    > .description {
      margin-top: 20px;
      font-size: 16px;
      margin-right: 20px;
    }
  }
  > .repository-owner {
    display: flex;
    align-items: center;
    > .avatar {
      width: 50px;
      height: 50px;
      border-radius: 50px;
    }
    > .owner {
      margin-left: 20px;
    }
  }
  > .repository-infomations {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    > .language-warpper {
      display: flex;
      > .language {
        background-color: #fff;
      }
    }
  }
  @media (max-width: 800px) {
    grid-template-columns: 2.5fr 0.5fr 1.5fr;
    > .repository-owner {
      > .owner {
        display: none;
      }
    }
  }
`;

const LanguageStyled = styled.div`
  background-color: #add8e6;
  border-radius: 8px;
  text-align: center;
  margin: 10px;
`;

const handleLanguageData = (languageArray) => {
  //in case the project gots too many langs to show
  const newArray = languageArray.slice(0, 3);
  newArray[3] = "and more";
  return newArray;
};

const RepositoryRow = ({ data }) => {
  const [language, setLanguage] = useState([]);
  useEffect(() => {
    const fetchLanguage = async () => {
      const response = await makeGetRequest(data.languages_url);
      const langData = Object.keys(response.data);

      if (langData.length > 3) {
        const newLangData = handleLanguageData(langData);
        setLanguage(newLangData);
        return;
      }
      setLanguage(langData);
      return;
    };

    fetchLanguage();
  }, []);
  const redirectTo = (url) => {
    window.location.href = url;
  };

  return (
    <RepositoryRowStyled data-testid="table-row">
      <div className="repository-name">
        <div className="project-name">{data.name}</div>
        <div className="description">{data.description}</div>
      </div>
      <div className="repository-owner">
        <img className="avatar" src={data.owner.avatar_url} alt="" />
        <div className="owner"> {data.owner.login} </div>
      </div>
      <div className="repository-infomations">
        <div className="language-wrapper">
          <div className="title">language:</div>
          <div className="languages">
            {language.map((each, id) => {
              return (
                <LanguageStyled className={`lang-${id}`}>{each}</LanguageStyled>
              );
            })}
          </div>
        </div>
        <div className="button-wrapper">
          <Button
            text="Visit Repo"
            type="simple"
            text="Visit Repo"
            handleOnClick={() => {
              redirectTo(data.html_url);
            }}
          />
        </div>
      </div>
    </RepositoryRowStyled>
  );
};

export default RepositoryRow;
