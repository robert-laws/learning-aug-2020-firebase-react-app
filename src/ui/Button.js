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

const TransparentButton = styled(ButtonBase)`
  background-color: transparent;
  color: #aaa;
`;

const ShadowButton = styled(ButtonBase)`
  box-shadow: 0px 5px 5px #888;
`;

export const Button = ({ type, children, ...rest }) => {
  switch (type) {
    case 'transparent':
      return <TransparentButton {...rest}>{children}</TransparentButton>;
    case 'shadow':
      return <ShadowButton {...rest}>{children}</ShadowButton>;
    case 'google-sign-in':
      return <ButtonBase {...rest}>Sign in with Google</ButtonBase>;
    default:
      return <ButtonBase {...rest}>{children}</ButtonBase>;
  }
};

export const SignInWithGoogleButton = ({ ...rest }) => {};
