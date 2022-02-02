import React from 'react';
import styled from 'styled-components';

// Card 데이터
// media query 로 사이즈 잡아주자
const Container = styled.div`
  width: 300px;
  height: 340px;
  border: 2px dotted tomato;
`;

function Card() {
  return <Container>card</Container>;
}

export default Card;
