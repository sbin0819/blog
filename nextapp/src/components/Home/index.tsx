import React from 'react';
import styled from 'styled-components';

import { Card } from '@common';

const Container = styled.div`
  margin: 80px 80px;
`;

const CardListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

function Home() {
  return (
    <Container>
      <CardListContainer>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_, i) => (
          <Card key={i} />
        ))}
      </CardListContainer>
    </Container>
  );
}

export default Home;
