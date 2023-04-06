import styled from 'styled-components'

export const SkillCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: var(--spacing-2);
  background-color: var(--black-1);
  padding: var(--spacing-2);
  border-radius: 5px;

  @media (min-width: 768px) {
    padding: var(--spacing-3);
    gap: var(--spacing-3);
  }
`

export const SkillCardHeader = styled.header`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
`
