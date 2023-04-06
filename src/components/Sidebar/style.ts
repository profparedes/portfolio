import styled from 'styled-components'

export const SidebarContainer = styled.aside`
  width: 75%;
  max-width: 35rem;
  min-width: 32rem;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: var(--black-1);
  padding: 3rem;
  display: flex;
  flex-direction: column;
  z-index: 1;
  gap: var(--spacing-3);
  overflow-y: auto;

  transition: transform 0.3s ease-in-out;

  @media (min-width: 768px) {
    padding: 6rem 3rem;
  }

  @media (min-width: 1200px) {
    justify-content: space-between;
  }

  @media (max-width: 1199px) {
    transform: translateX(-100%);

    &.show {
      transform: translateX(0);
    }
  }

  @media (max-width: 1399px) {
    max-width: 30rem;
    min-width: auto;
  }
`

export const Overlay = styled.button`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  display: none;

  @media (max-width: 1199px) {
    &.show {
      display: block;
    }
  }
`

export const Profile = styled.div`
  display: flex;
  gap: var(--spacing-2);

  @media (min-height: 900px) {
    flex-direction: column;
  }
`

export const ProfilePicture = styled.img`
  display: block;
  width: 80px;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;

  @media (min-height: 900px) {
    width: 150px;
  }

  @media (min-height: 960px) {
    width: 180px;
  }

  @media (min-height: 1030px) {
    width: 100%;
  }
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-height: 900px) {
    align-items: center;
  }
`

export const NameLabel = styled.h1`
  font-size: var(--font-size-4);

  @media (max-height: 899px) {
    font-size: var(--font-size-2);
  }
`

export const ProfessionLabel = styled.p`
  font-size: var(--font-size-3);
  font-style: italic;
  text-align: center;
  line-height: 1;

  @media (max-height: 899px) {
    font-size: var(--font-size-1);
    text-align: left;
  }
`

export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-height: 960px) {
    gap: 2rem;
  }
`

export const SocialMenu = styled.nav`
  display: none;
  gap: 2rem;
  justify-content: center;

  @media (min-height: 710px) {
    display: flex;
  }
`

export const SocialLink = styled.a`
  &:hover {
    color: var(--accent-color);
  }
`
