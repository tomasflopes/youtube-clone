import React from 'react';

import {
  Container,
  HamburgerIcon,
  YouTube,
  Logo,
  SearchWrapper,
  SearchBar,
  SearchIcon,
  ProfileArea,
  CameraIcon,
  DashboardIcon,
  NotificationsIcon,
  UserAvatar,
} from './styles';

const TopBar: React.FC = () => {
  return (
    <Container>
      <HamburgerIcon />
      <YouTube>
        <Logo />
        <span>YouTube</span>
      </YouTube>
      <SearchWrapper>
        <SearchBar placeholder='Search' />
        <SearchIcon />
      </SearchWrapper>
      <ProfileArea>
        <CameraIcon />
        <DashboardIcon />
        <NotificationsIcon />
        <UserAvatar />
      </ProfileArea>
    </Container>
  );
};

export default TopBar;
