import styled from 'styled-components'

export const LanguageSwitcherContainer = styled.div`
  display: flex;
  gap: 2rem;
`

export const FlagButton = styled.button`
  position: relative;
  background-color: transparent;
  border: none;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  &.active::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 48px;
    height: 0;
    border-bottom: solid 3px var(--accent-color);
  }
`
