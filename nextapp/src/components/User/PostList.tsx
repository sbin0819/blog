import { useQuery } from '@apollo/client';
import { GET_FILTERED_POSTS_BY_USER } from '@graphql/queries';
import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 20px;
  max-width: 750px;
  margin: 1px auto;
  @media only screen and (max-width: 800px) {
    margin: 20px auto;
  }
`;

const StepContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 600px;
  margin: 0 auto;
  .step {
    flex: 1;
    padding: 20px;
    display: flex;
    justify-content: center;
    border-bottom: 2px solid #eee;
    cursor: pointer;
  }
  .step.active {
    border-bottom: 2px solid teal;
  }
`;

const BodyContainer = styled.div`
  padding: 12px;
  .card {
    margin-top: 15px;
    height: 280px;
    box-shadow: rgb(255 255 255 / 5%) 4px 4px 16px 8px;
  }
`;

const stepsList = [
  { id: 'step1', text: '글', active: true },
  { id: 'step2', text: '시리즈', active: false },
  { id: 'step3', text: '소개', active: false },
];

function PostList() {
  const { data, loading, error } = useQuery(GET_FILTERED_POSTS_BY_USER);
  const [steps, setSteps] = useState(stepsList);
  const onHandleStep = (e: any) => {
    const {
      target: { id },
    } = e;
  };
  return (
    <Container>
      <StepContainer>
        {steps.map((step) => (
          <div
            id={step.id}
            key={step.id}
            className={`step  ${step.active ? 'active' : ''}`}
            onClick={onHandleStep}
          >
            {step.text}
          </div>
        ))}
      </StepContainer>
      <BodyContainer>
        {data?.posts?.data.map((post: any, key: number) => (
          <div className="card" key={key}>
            {post.attributes.title}
          </div>
        ))}
      </BodyContainer>
    </Container>
  );
}

export default PostList;
