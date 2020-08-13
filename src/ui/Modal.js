import React from 'react';
import styled from 'styled-components';
import ModalBase from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    borderRadius: '8px',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};

const XCloseButton = styled.button`
  float: right;
  outline: none;
  border: none;
  background: #fff;
  font-size: 28px;
  cursor: pointer;

  &:hover {
    color: #777;
  }
`;

const ContentBox = styled.div`
  background-color: #fff;
  padding: 16px;
`;

ModalBase.setAppElement('#root');

export const Modal = ({
  isOpen,
  afterOpenModal = () => {},
  onRequestClose = () => {},
  children,
}) => (
  <ModalBase
    appElement={document.getElementById('root')}
    isOpen={isOpen}
    onAfterOpen={() => {
      document.body.style.overflow = 'hidden';
      afterOpenModal();
    }}
    onRequestClose={() => {
      document.body.style.overflow = 'unset';
      onRequestClose();
    }}
    style={customStyles}
    contentLabel='Example Modal'
  >
    <XCloseButton
      onClick={() => {
        document.body.style.overflow = 'unset';
        onRequestClose();
      }}
    >
      <span aria-hidden='true'>&times;</span>
    </XCloseButton>
    <ContentBox>{children}</ContentBox>
  </ModalBase>
);
