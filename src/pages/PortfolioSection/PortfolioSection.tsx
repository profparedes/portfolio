import { memo } from 'react'

import Contents, { ProjectKeyType } from 'contents/contents'
import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

import ProjectCard from 'components/ProjectCard'
import Section from 'components/Section'

import { getTranslatedTitle } from 'helpers'

import { LanguageType } from 'types'

const PortfolioSection: React.FC = () => {
  const { i18n, t } = useTranslation()

  return (
    <Section id="portfolio" title={t('sections.portfolio.title') as string}>
      {Object.keys(Contents.projects).map((key) => (
        <section key={key} className="mb-5 pb-5">
          <Container fluid>
            <h3 className="font-size-3 mb-4">{key}</h3>
            <Row className="row-cols-1 row-cols-md-2 row-cols-xxl-3 g-5">
              {Contents.projects[key as ProjectKeyType].map((project) => (
                <Col
                  key={getTranslatedTitle(
                    project.title,
                    i18n.language as LanguageType,
                  )}
                >
                  <ProjectCard
                    title={getTranslatedTitle(
                      project.title,
                      i18n.language as LanguageType,
                    )}
                    titleComponent="h3"
                    cover={
                      project.cover ?? 'https://via.placeholder.com/1920x1080'
                    }
                    url={project.url}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      ))}
    </Section>
  )
}

export default memo(PortfolioSection)
