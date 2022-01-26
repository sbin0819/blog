import React from 'react';
import styled from 'styled-components';

import { Card } from '@common';

const Container = styled.div`
  margin: 80px 150px;
`;

const CardListContainer = styled.div`
  padding: 0 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
`;

function Home() {
  return (
    <Container>
      <CardListContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardListContainer>
    </Container>
  );
}

export default Home;
