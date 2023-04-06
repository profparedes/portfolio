import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1.5rem;
  background-color: red;
  background: linear-gradient(
    0deg,
    rgba(51, 51, 51, 0) 0%,
    rgba(51, 51, 51, 0.85) 40%,
    rgba(51, 51, 51, 1) 100%
  );

  @media (min-width: 768px) {
    padding: 3rem;
  }

  @media (min-width: 1200px) {
    padding: 6rem 6rem 6rem 41rem;
  }
`

export const MenuButton = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  color: white;

  &:hover {
    color: var(--accent-color);
  }

  @media (min-width: 1200px) {
    display: none;
  }
`
