import styled from 'styled-components'

export const SectionContainer = styled.section`
  padding: 1.5rem;

  @media (min-width: 768px) {
    padding: 3rem;
  }

  @media (min-width: 1200px) {
    padding: 6rem;
  }
`

export const SectionTitle = styled.h2`
  font-size: var(--font-size-4);
  font-weight: 700;
  color: var(--accent-color);
  margin-bottom: var(--spacing-4);
`
