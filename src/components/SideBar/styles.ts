import styled, { css } from 'styled-components';

import {
  Home,
  Trending,
  Subscription,
  Videos,
  History,
  Clock,
  Like,
  Playlist,
} from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;

  background: var(--secondary);

  width: min(20%, 200px);
  height: 100%;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;

  font-size: 15.5px;

  @media (min-width: 1024px) {
    margin-bottom: 0;
    flex-direction: row;
    justify-content: flex-start;
    > span {
      display: inline;
      margin-left: 20px;
    }
  }

  & + div {
    margin-top: 15px;
  }

  &:last-child {
    margin-bottom: 15px;
  }
`;

const iconCSS = css`
  width: 28px;
  height: 28px;

  color: var(--secondary);
`;

export const HomeIcon = styled(Home)`
  ${iconCSS}
`;

export const TrendingIcon = styled(Trending)`
  ${iconCSS}
`;

export const SubscriptionsIcon = styled(Subscription)`
  ${iconCSS}
`;

export const VideoIcons = styled.div`
  display: none;
  border-top: 0.2px solid var(--gray);
  padding-top: 20px;

  @media (min-width: 1024px) {
    display: block;
  }
`;

export const LibraryIcon = styled(Videos)`
  ${iconCSS}
`;

export const HistoryIcon = styled(History)`
  ${iconCSS}
`;

export const WatchLaterIcon = styled(Clock)`
  ${iconCSS}
`;

export const LikedIcon = styled(Like)`
  ${iconCSS}
`;

export const FavoritedIcon = styled(Playlist)`
  ${iconCSS}
`;

export const Subscriptions = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;

    > h1 {
      font-size: 16px;
      font-weight: bold;
      letter-spacing: -1.5px;
    }
  }
`;

export const Channel = styled.div`
  display: flex;

  align-items: center;
  justify-content: flex-start;

  > span {
    display: none;
  }
  margin-top: 15px;

  & + div {
    margin-top: 10px;
  }

  @media (min-width: 425px) {
    > span {
      display: inline;
      margin-left: 20px;
      font-size: 15;
      letter-spacing: -1px;
    }
  }
`;

export const Avatar = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  flex-shrink: 0;

  background: var(--content);
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  word-wrap: break-word;

  width: 80%;
  bottom: 0;
  position: absolute;
  bottom: 0;
`;

export const UtilLinks = styled.div`
  flex: 1;
`;

export const Terms = styled.div`
  flex: 1;
`;
