import React from 'react';

import {
  Container,
  Item,
  HomeIcon,
  TrendingIcon,
  SubscriptionsIcon,
  VideoIcons,
  LibraryIcon,
  HistoryIcon,
  WatchLaterIcon,
  LikedIcon,
  FavoritedIcon,
  Subscriptions,
  Channel,
  Avatar,
  Footer,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <Item>
        <HomeIcon />
        <span>Home</span>
      </Item>
      <Item>
        <TrendingIcon />
        <span>Trending</span>
      </Item>
      <Item>
        <SubscriptionsIcon />
        <span>Subscriptions</span>
      </Item>

      <VideoIcons>
        <Item>
          <LibraryIcon />
          <span>Library</span>
        </Item>
        <Item>
          <HistoryIcon />
          <span>History</span>
        </Item>
        <Item>
          <WatchLaterIcon />
          <span>Watch Later</span>
        </Item>
        <Item>
          <LikedIcon />
          <span>Liked</span>
        </Item>
        <Item>
          <FavoritedIcon />
          <span>Favorite</span>
        </Item>
      </VideoIcons>

      <Subscriptions>
        <h1>SUBSCRIPTIONS</h1>
        <Channel>
          <Avatar />
          <span>kapa7</span>
        </Channel>
        <Channel>
          <Avatar />
          <span>kapa7</span>
        </Channel>
        <Channel>
          <Avatar />
          <span>kapa7</span>
        </Channel>
        <Channel>
          <Avatar />
          <span>kapa7</span>
        </Channel>
        <Channel>
          <Avatar />
          <span>kapa7</span>
        </Channel>
        <Channel>
          <Avatar />
          <span>kapa7</span>
        </Channel>
        <Channel>
          <Avatar />
          <span>kapa7</span>
        </Channel>
        <Channel>
          <Avatar />
          <span>kapa7</span>
        </Channel>
      </Subscriptions>

      <Footer>
        <span>About </span>
        <span> Copyright </span>
        <span> Contact Us </span>

        <span> Terms </span>
        <span> Privacy </span>
        <span> Policy & Safety </span>
      </Footer>
    </Container>
  );
};

export default SideBar;
