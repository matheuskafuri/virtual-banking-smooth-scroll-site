import React, {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa'; 
import { IconContext } from 'react-icons/lib';
import { animateScroll } from 'react-scroll';

import { 
  Nav, 
  NavbarContainer, 
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks, 
  NavButton,
  NavButtonLink,
} from './NavbarElements';

const Navbar = ({ handleSideBar }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true);
    }else{
      setScrollNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, [])

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  }

  return (
    <>
    <IconContext.Provider value={{ color: '#FFF' }}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={scrollToTop}>dolla</NavLogo>

          <MobileIcon onClick={handleSideBar}>
            <FaBars />
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLinks 
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
                to="discover"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
                to="signup"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >Sing Up</NavLinks>
            </NavItem>
          </NavMenu>

          <NavButton>
            <NavButtonLink to="/signIn">Sign In</NavButtonLink>
          </NavButton>

        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar;
