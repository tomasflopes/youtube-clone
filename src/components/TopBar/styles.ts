import styled, { css } from 'styled-components';

import {
  Camera,
  Dashboard,
  Bell,
  Hamburger,
  Youtube,
  Search,
} from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-shrink: 0;

  align-items: center;
  padding: 10px 25px;

  background: var(--secondary);
`;

const iconCSS = css`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
`;

export const HamburgerIcon = styled(Hamburger)`
  ${iconCSS}
  color: var(--gray);
`;

export const YouTube = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;

  cursor: pointer;

  transition: 1000ms all ease-in-out;

  &:hover {
    > svg {
      color: #fff;
    }
  }
`;

export const Logo = styled(Youtube)`
  ${iconCSS}
  color: var(--red);
`;

export const SearchWrapper = styled.div`
  flex: 3;
  display: flex;

  align-items: center;
  justify-content: center;
  position: relative;
`;

export const SearchBar = styled.input`
  border: 1px solid var(--gray);
  width: min(600px, 80%);
  height: 36px;
  background: var(--primary);

  padding: 0 10px;

  font-size: 14px;

  &::placeholder {
    color: #fff;
    width: 90%;
  }

  ~ svg {
    position: relative;
    right: 50px;
    z-index: 1;

    transition: 120ms ease-in-out;
  }

  outline: 0;

  &:focus {
    border: 1px solid var(--highlighted);

    ~ svg {
      color: var(--highlighted);
    }
  }
`;

export const SearchIcon = styled(Search)`
  display: flex;

  align-items: center;
  justify-content: center;
  width: 48px;
  height: 34px;

  background: var(--secondary);
  color: var(--gray);
`;

export const ProfileArea = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 10%;

  align-items: center;
  justify-content: space-between;
`;

export const CameraIcon = styled(Camera)`
  ${iconCSS}
`;

export const DashboardIcon = styled(Dashboard)`
  ${iconCSS}
`;

export const NotificationsIcon = styled(Bell)`
  ${iconCSS}
`;

export const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  flex-shrink: 0;

  border-radius: 50%;
  background: var(--content);
`;
