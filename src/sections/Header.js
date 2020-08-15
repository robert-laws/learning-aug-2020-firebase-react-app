import React from 'react';
import styled from 'styled-components';
import { SignOutButton } from '../auth';
import { Link, Button } from '../ui';

const HeaderBase = styled.div`
  height: 64px;
  width: 99;
  padding: 0 16px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Header = () => {
  return (
    <HeaderBase>
      <Link to='/edit-profile'>
        <Button style={{ marginRight: '8px' }}>Profile</Button>
      </Link>
      <SignOutButton />
    </HeaderBase>
  );
};
