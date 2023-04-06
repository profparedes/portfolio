import { memo } from 'react'

import { Container } from 'react-bootstrap'

import { SectionContainer, SectionTitle } from './style'

interface ISectionProps {
  id?: string
  title?: string
  children?: React.ReactNode
}

const Section: React.FC<ISectionProps> = ({ children, id, title }) => (
  <SectionContainer id={id}>
    <Container fluid>
      {!!title && <SectionTitle>{title}</SectionTitle>}
    </Container>
    {children}
  </SectionContainer>
)

export default memo(Section)
