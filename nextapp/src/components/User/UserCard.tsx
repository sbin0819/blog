import React, { useReducer } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { Icon } from '@components/common';
import { AiFillGithub, AiFillHome, AiFillMail } from 'react-icons/ai';

const Container = styled.div`
  padding: 40px 20px 30px;
  box-shadow: rgb(255 255 255 / 5%) 4px 4px 16px 8px;
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
    </Container>
  );
}

export default User;
