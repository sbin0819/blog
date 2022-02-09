import React from 'react';
import styled from 'styled-components';

import { Card } from '@common';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '@graphql/queries';

const Container = styled.div`
  margin: 60px 10%;
`;

const CardListContainer = styled.div`
  margin: 0 auto;
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
        {data?.posts?.data?.map((data: any, i: number) => (
          <Card
            key={i}
            {...data.attributes}
            username={data.attributes.user?.data?.attributes?.username}
          />
        ))}
      </CardListContainer>
    </Container>
  );
}

export default Home;
