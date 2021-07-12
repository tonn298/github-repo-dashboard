import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  border: none;
  width: 40px;
  :hover {
    background-color: #ff0000;
  }
`;

const Button = ({ handleOnClick, text }) => {
  return <ButtonStyled onClick={() => handleOnClick()}>{text}</ButtonStyled>;
};

export default Button;
