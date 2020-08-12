import React from 'react';
import styled from 'styled-components';

const ButtonBase = styled.button`
  cursor: pointer;
  background-color: #a4d22a;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  outline: none;
  padding: 16px;
  transition: all 0.15s ease-in-out;

  &:hover {
    background-color: #7ea120;
  }

  :disabled {
    background-color: #ccc;
  }
`;

export const Button = ({ children }) => {
  return <ButtonBase>{children}</ButtonBase>;
};
