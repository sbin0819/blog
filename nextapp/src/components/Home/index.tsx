import React from 'react';
import styled from 'styled-components';

import { Card } from '@common';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '@graphql/queries';

const Container = styled.div`
  width: 1360px;
  margin: 40px auto 60px;
  @media screen and (min-width: 1950px) {
    width: 1720px;
  }
  @media screen and (max-width: 1620px) {
    width: 1000px;
  }
  @media screen and (max-width: 1010px) {
    width: 100%;
    padding: 0 30px;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    padding: 0 10px;
  }
`;

const CardListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  gap: 20px;
`;

// 24개씩 데이터 받기
function Home() {
  const { data, loading, error } = useQuery(GET_POSTS);
  return (
    <Container>
      <CardListContainer>
        {data?.posts?.data?.map((data: any, i: number) => {
          return (
            <Card
              key={i}
              {...data.attributes}
              username={data.attributes.user?.data?.attributes?.username}
            />
          );
        })}
      </CardListContainer>
    </Container>
  );
}

export default Home;
