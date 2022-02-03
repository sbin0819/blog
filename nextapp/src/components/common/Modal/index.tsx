import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  /* justify-content: center;
  align-items: center; */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

function Modal({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}

export default Modal;
