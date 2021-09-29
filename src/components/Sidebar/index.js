import React from 'react'

import { 
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarButtonWrapper,
  SidebarButton,
} from './SidebarElements';

const Sidebar = ({ isOpen, handleSideBar }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={handleSideBar}>
      <Icon onClick={handleSideBar}>
        <CloseIcon />
      </Icon>

      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={handleSideBar}>About</SidebarLink>
          <SidebarLink to="discover" onClick={handleSideBar}>Discover</SidebarLink>
          <SidebarLink to="services" onClick={handleSideBar}>Services</SidebarLink>
          <SidebarLink to="signup" onClick={handleSideBar}>Sign Up</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>

      <SidebarButtonWrapper>
        <SidebarButton to="/signIn">Sign In</SidebarButton>
      </SidebarButtonWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;
