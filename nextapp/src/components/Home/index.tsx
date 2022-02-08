import React from 'react';
import styled from 'styled-components';

import { Card } from '@common';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '@graphql/queries';

const Container = styled.div`
  margin: 60px 15px;
`;

const CardListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

// 24개씩 데이터 받기
function Home() {
  const { data, loading, error } = useQuery(GET_POSTS);
  return (
    <Container>
      <CardListContainer>
        {data?.posts?.data?.map((_: any, i: number) => (
          <Card key={i} />
        ))}
      </CardListContainer>
    </Container>
  );
}

export default Home;
