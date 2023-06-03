import AnchorLink from 'react-anchor-link-smooth-scroll'
import styled from 'styled-components'

import CodeIcon from 'assets/code.png'

export const TopSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--spacing-3);
  width: 100%;
  height: 100vh;
  padding: 1em 1em 0;
  background-image: url(${CodeIcon});
  background-repeat: no-repeat;
  background-position: right 10% center;

  @media (min-width: 768px) {
    padding: 6rem 6rem 0;
    gap: var(--spacing-3);
  }
`

export const ProfilePicture = styled.img`
  display: block;
  width: 100%;
  max-width: 160px;
  border-radius: 50%;

  @media (max-height: 600px) {
    max-width: 80px;
  }

  @media (max-height: 520px) {
    display: none;
  }
`

export const GreetingText = styled.p`
  line-height: 1;
  font-size: var(--font-size-3);

  @media (min-width: 576px) {
    font-size: var(--font-size-4);
  }

  @media (min-width: 768px) {
    font-size: var(--font-size-5);
  }

  @media (min-width: 1200px) {
    @media (min-height: 600px) {
      font-size: var(--font-size-6);
    }

    @media (min-height: 900px) {
      font-size: var(--font-size-7);
    }
  }
`

export const ScrollDownButton = styled(AnchorLink)`
  line-height: 1;
  font-size: var(--font-size-3);
  text-decoration: none;

  svg {
    margin-top: var(--spacing-3);

    animation: bounce2 2s ease infinite;

    @keyframes bounce2 {
      0%,
      20%,
      50%,
      80%,
      100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-30px);
      }
      60% {
        transform: translateY(-15px);
      }
    }
  }
`
