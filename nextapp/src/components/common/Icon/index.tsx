import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background: tomato;
`;

// drop down 추가
function Icon() {
  return (
    <Container
      onClick={() => {
        console.log('a');
      }}
    >
      H
    </Container>
  );
}

export default Icon;
