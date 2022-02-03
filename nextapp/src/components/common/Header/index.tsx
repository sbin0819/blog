import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { AiOutlineSearch } from 'react-icons/ai';
import { Icon } from '@common';

import AuthModal from '@components/AuthModal';
import { useCookies } from 'react-cookie';

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
  const [cookie, _, removeCookie] = useCookies(['Authorization']);
  const [isLogin, setIsLogin] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const onCloseModal = () => setIsOpenModal(false);
  useEffect(() => {
    if (cookie.Authorization) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [cookie.Authorization]);
  return (
    <>
      {isOpenModal && <AuthModal onClose={onCloseModal} />}
      <Container>
        <div className="logo">
          <Link href="/">
            <a>sublog</a>
          </Link>
        </div>
        <div className="right-menu">
          <AiOutlineSearch />
          {isLogin ? (
            <>
              <Link href="/userid">
                <a>
                  <Icon />
                </a>
              </Link>
              <button onClick={() => removeCookie('Authorization')}>
                remove
              </button>
            </>
          ) : (
            <span onClick={() => setIsOpenModal((prev) => !prev)}>login</span>
          )}
        </div>
      </Container>
    </>
  );
}

export default Header;
