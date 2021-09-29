import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
  height: 80px;
  display: flex;

  justify-content: center;
  align-items: center;

  background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};

  margin-top: -80px;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  height: 80px;
  width: 100%;

  justify-content: space-between;
  padding: 0 24px;

  z-index: 1;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  display: flex;
  
  justify-self: flex-start;
  align-items: center;
  margin-left: 24px;

  color: #FFF;

  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #FFF;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  display: flex;
  height: 100%;

  align-items: center;
  padding: 0 1rem;

  color: #FFF;
  
  text-decoration: none;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01BF71;
  }
`;

export const NavButton = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavButtonLink = styled(LinkR)`
  border-radius: 50px;
  background: #01BF71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #FFF;
    color: #010606;
  }
`;