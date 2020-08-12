import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Button, ErrorMessage, Heading, Modal, TextInput } from '../ui';

const Form = styled.div`
  width: 350px;
  margin: 32px;
`;

const FullWidthText = styled(TextInput)`
  display: block;
  width: 100%;
`;

const FullWidthButton = styled(Button)`
  display: block;
  width: 100%;
`;

const CreateAccountButton = styled(FullWidthButton)`
  position: relative;
  top: 104px;
  margin-top: -64px;
`;

const withTopMargin = (px) => ({ marginTop: `${px}px` });

export const SignInForm = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const history = useHistory();

  const onSignInClicked = async () => {
    console.log('CLICKED');

    try {
      history.push('/');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const onSignInWithGoogleClicked = async () => {
    history.push('/');
  };

  return (
    <Form>
      <Heading>My Reservation App</Heading>
      {errorMessage ? (
        <ErrorMessage
          style={{
            marginBottom: '16px',
          }}
        >
          {errorMessage}
        </ErrorMessage>
      ) : null}
    </Form>
  );
};
