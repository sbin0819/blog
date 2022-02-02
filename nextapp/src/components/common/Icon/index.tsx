import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div<{ size: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  background: tomato;
`;

interface IconProps {
  hasDropdown?: boolean;
  size?: number;
}
function Icon({ hasDropdown = false, size = 38 }: IconProps) {
  return (
    <Container
      size={size}
      onClick={() => {
        console.log('a');
      }}
    >
      H
    </Container>
  );
}

export default Icon;
