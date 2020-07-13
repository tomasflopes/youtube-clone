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
  padding: 8px 20px;

  background: var(--secondary);
`;

const iconCSS = css`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;

export const HamburgerIcon = styled(Hamburger)`
  ${iconCSS}
  color: var(--gray);
`;

export const YouTube = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;

  cursor: pointer;
`;

export const Logo = styled(Youtube)`
  width: 30px;
  height: 30px;
  flex-shrink: 0;

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
  width: min(580px, 80%);
  height: 32px;
  background: var(--primary);

  padding: 0 10px;

  font-size: 14px;

  &::placeholder {
    font-size: 15px;
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

export const SearchIconWrapper = styled.div`
  display: flex;

  width: 80px;
  height: 32px;

  align-items: center;
  justify-content: center;
  border-radius: 2px;

  background: var(--third);
  color: var(--gray);
`;

export const SearchIcon = styled(Search)`
  flex: 1;
  width: 30px;
  height: 24px;
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
