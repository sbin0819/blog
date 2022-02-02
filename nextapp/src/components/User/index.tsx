import React, { useReducer } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { Icon } from '@components/common';
import { AiFillGithub, AiFillHome, AiFillMail } from 'react-icons/ai';

import Article from './Article';
import Series from './Series';
import About from './About';

const Container = styled.div`
  margin: 60px 80px;
`;

const UserCard = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 36px;
  border-bottom: 1px solid #eee;
  gap: 12px;
  .user-desc {
    display: flex;
    flex-direction: column;
    gap: 14px;
    h3 {
      font-weight: bold;
      font-size: 1.5rem;
    }
  }
`;
const IconsContainer = styled.div`
  padding-top: 22px;
  span {
    font-size: 34px;
    padding-right: 16px;
  }
`;
const BottomContainer = styled.div``;

function User() {
  const router = useRouter();

  return (
    <Container>
      <UserCard>
        <Icon size={88} />
        <div className="user-desc">
          <h3>Admin</h3>
          <p>안녕하세요, admin 입니다.</p>
        </div>
      </UserCard>
      <IconsContainer>
        <span>
          <AiFillGithub />
        </span>
        <span>
          <AiFillHome />
        </span>
        <span>
          <AiFillMail />
        </span>
      </IconsContainer>
      <BottomContainer>
        <div>
          <span>글</span>
          <span>시리즈</span>
          <span>소개</span>
        </div>
        <div>
          <Article />
          <Series />
          <About />
        </div>
      </BottomContainer>
    </Container>
  );
}

export default User;
