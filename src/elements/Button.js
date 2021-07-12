import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  border: none;
  width: 40px;
  :hover {
    background-color: #add8e6;
  }
`;

const SimpleButtonStyled = styled.button`
  border: none;
  padding: 20px;
  border-radius: 12px;
  margin: 20px 0 0 20px;
  font-size: 20px;
  :hover {
    background-color: #add8e6;
  }
`;

const Button = ({ handleOnClick, text, type }) => {
  if (type === "simple") {
    return (
      <SimpleButtonStyled onClick={() => handleOnClick()}>
        {" "}
        {text}{" "}
      </SimpleButtonStyled>
    );
  }
  return <ButtonStyled onClick={() => handleOnClick()}>{text}</ButtonStyled>;
};

export default Button;
