import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
// Components
import Sidebar from '../../Test/components/Nav/Sidebar';
import Backdrop from '../../Test/components/Elements/Backdrop';
// Assets
import LogoIcon from '../../Test/assets/svg/Logo';
import { Cookies, useCookies } from 'react-cookie';
import Button from '@mui/material/Button';

const cookies = new Cookies();
export default function TopNavbar() {
  const [, , removeCookie] = useCookies();
  const [y, setY] = useState(window.scrollY);
  const userName = cookies.get('username');
  useEffect(() => {
    window.addEventListener('scroll', () => setY(window.scrollY));
    return () => {
      window.removeEventListener('scroll', () => setY(window.scrollY));
    };
  }, [y]);
  const logout = () => {
    localStorage.removeItem('refreshToken');
    removeCookie('username');
    removeCookie('accessToken');
  };
  return (
    <>
      <Wrapper
        className="flexCenter animate darkBg"
        style={y > 100 ? { height: '60px' } : { height: '80px' }}
      >
        <NavInner className="container flexSpaceCenter">
          <Link className="pointer flexNullCenter" to="/" smooth={true}>
            <LogoIcon />
            <h1
              style={{ marginLeft: '15px', color: 'white' }}
              className="font20 extraBold"
            >
              Kakao i LaaS
            </h1>
          </Link>
          <UlWrapperRight className="flexNullCenter">
            {localStorage.getItem('refreshToken') == null && (
              <li className="semiBold font13 pointer flexCenter">
                <a
                  href="/login"
                  className="radius8 lightBg"
                  style={{ padding: '10px 15px', color: 'black' }}
                >
                  Log in
                </a>
              </li>
            )}
            {localStorage.getItem('refreshToken') !== null && (
              <Button className="semiBold font13 pointer flexCenter">
                <a
                  href="/"
                  className="radius8 lightBg"
                  style={{ padding: '10px 15px', color: 'black' }}
                >
                  {userName}
                </a>
              </Button>
            )}
            {localStorage.getItem('refreshToken') !== null && (
              <Button
                className="semiBold font13 pointer flexCenter"
                onClick={logout}
              >
                <a
                  href="/"
                  className="radius8 lightBg"
                  style={{ padding: '10px 15px', color: 'black' }}
                >
                  로그아웃
                </a>
              </Button>
            )}
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`;
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;
