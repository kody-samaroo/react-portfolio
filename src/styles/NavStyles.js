import styled from 'styled-components';

export const NavStyles = styled.nav`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background: var(--bg-color);
  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    li {
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease background-color;
      &:hover {
        background-color: var(--accent-color-1);
      }
    }
    a {
      display: inline-block;
      font-family: 'Georgia';
      padding: 1rem 2rem;
      font-size: 2rem;
      color: var(--text-color);
      outline: none;
    }
    .active {
      color: var(--accent-color-2);
    }
  }
  .mobile-menu-icon {
    position: fixed;
    right: 1rem;
    top: 1rem;
    width: 5rem;
    cursor: pointer;
    display: none;
    outline: none;
    * {
      pointer-events: none;
    }
  }
  .darkmode-button {
    position: relative;
    left: 475px;
    bottom: 10px;
    height: 24px;
    width: 24px;
  }
  .nav-items .close-nav-icon {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    padding: 0;
    .hide-items {
      transform: translateY(calc(-100% - var(--top)));
    }
    .mobile-menu-icon {
      display: block;
    }
    .nav-items {
      --top: 1rem;
      transition: 0.3s ease transform;
      background-color: var(--accent-color-3);
      padding: 2rem;
      width: 100%;
      border-radius: 12px;
      position: absolute;
      right: 1rem;
      top: var(--top);
      .close-nav-icon {
        display: block;
        width: 5rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        margin-bottom: 1rem;
      }
      .darkmode-button {
        position: absolute;
        top: 8%;
        left: 8%;
        height: 30px;
      }
    }
  }
`;