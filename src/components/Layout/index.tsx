import React from 'react';

import { Container } from './styles';

// import SideBar from '../SideBar';
// import Feed from '../Feed';
import TopBar from '../TopBar';

const Layout: React.FC = () => {
  return (
    <Container>
      <TopBar />
      {/* <SideBar /> */}
      {/* <Feed /> */}
    </Container>
  );
};

export default Layout;
