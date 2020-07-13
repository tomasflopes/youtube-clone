import React from 'react';

import { Container, ContentWrapper } from './styles';

import SideBar from '../SideBar';
import Feed from '../Feed';
import TopBar from '../TopBar';

const Layout: React.FC = () => {
  return (
    <Container>
      <TopBar />
      <ContentWrapper>
        <SideBar />
        <Feed />
      </ContentWrapper>
    </Container>
  );
};

export default Layout;
