import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { AiOutlineSearch } from 'react-icons/ai';
import { Icon } from '@common';

const Container = styled.div`
  display: flex;
  height: 80px;
  padding: 0 140px;
  align-items: center;
  justify-content: space-between;
  background: #761b88;
  font-size: 24px;
  .right-menu {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;

function Header() {
  return (
    <Container>
      <div className="logo">
        <Link href="/">
          <a>sublog</a>
        </Link>
      </div>
      <div className="right-menu">
        <AiOutlineSearch />
        <Icon />
      </div>
    </Container>
  );
}

export default Header;
