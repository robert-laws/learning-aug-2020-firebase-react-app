import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Button, ErrorMessage, Heading, Modal, TextInput } from '../ui';
import { signIn } from './signIn';
import { signInWithGoogle } from './signInWithGoogle';
import { ResetPasswordForm } from './ResetPasswordForm';

const Form = styled.div`
  width: 350px;
  margin: 32px;
`;

const FullWidthTextInput = styled(TextInput)`
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

  const onSignInClicked = () => {
    console.log('CLICKED');

    try {
      signIn(emailValue, passwordValue);
      history.push('/');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const onSignInWithGoogleClicked = () => {
    signInWithGoogle();
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
      <FullWidthTextInput
        name='email'
        value={emailValue}
        placeholder='someone@gmail.com'
        onChange={(e) => setEmailValue(e.target.value)}
      />
      <FullWidthTextInput
        name='password'
        type='password'
        value={passwordValue}
        placeholder='Password'
        style={withTopMargin(8)}
        onChange={(e) => setPasswordValue(e.target.value)}
      />
      <FullWidthButton
        type='transparent'
        style={withTopMargin(8)}
        onClick={() => setShowModal(true)}
      >
        Forgot your password?
      </FullWidthButton>
      <FullWidthButton
        disabled={!emailValue || !passwordValue}
        style={withTopMargin(8)}
        onClick={onSignInClicked}
      >
        Sign In
      </FullWidthButton>
      <FullWidthButton
        style={withTopMargin(8)}
        onClick={onSignInWithGoogleClicked}
      >
        Sign In with Google
      </FullWidthButton>
      <CreateAccountButton
        type='transparent'
        onClick={() => history.push('/create-account')}
      >
        Create an account
      </CreateAccountButton>
      <Modal isOpen={showModal} onRequestClose={() => setShowModal(false)}>
        <ResetPasswordForm onClose={() => setShowModal(false)} />
      </Modal>
    </Form>
  );
};