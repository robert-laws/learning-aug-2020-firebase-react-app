import React from 'react';
import styled from 'styled-components';
import { Button } from '../ui';
import { signOut } from './signOut';

const StyledButton = styled(Button)`
  background-color: #ed0d25;
`;

export const SignOutButton = () => {
  const onClickSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out: ', error.message);
    }
  };

  return (
    <StyledButton alert onClick={onClickSignOut}>
      Sign Out
    </StyledButton>
  );
};
