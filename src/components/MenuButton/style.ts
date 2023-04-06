import AnchorLink from 'react-anchor-link-smooth-scroll'
import styled from 'styled-components'

export const MenuButtonContainer = styled(AnchorLink)`
  background-color: var(--black-3);
  color: white;
  font-size: var(--font-size-2);
  font-weight: 400;
  text-align: center;
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: 3rem;
  text-decoration: none;

  &:hover {
    background-color: var(--accent-color);
    color: var(--black-3);
  }
`
