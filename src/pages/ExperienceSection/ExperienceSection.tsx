import { memo, useMemo } from 'react'

import Contents from 'contents/contents'
import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

import Config from 'Config'

import ProjectCard from 'components/ProjectCard'
import Section from 'components/Section'
import Text from 'components/Text'

import { getTranslatedTitle, pluralize } from 'helpers'

import { LanguageType } from 'types'

const ExperienceSection: React.FC = () => {
  const { i18n, t } = useTranslation()

  const years = useMemo(
    () => new Date().getFullYear() - Config.profile.profession.startedAt,
    [],
  )

  return (
    <Section id="experience" title={t('sections.experience.title') as string}>
      <section className="mb-5">
        <Container fluid>
          <Text as="p" className="font-size-2 mb-5">
            {t('sections.experience.description', {
              years: `${years} ${pluralize(
                t('words.year'),
                t('words.years'),
                years,
              )}`,
            })}
          </Text>
          <Row className="row-cols-1 row-cols-md-2 row-cols-xxl-3 g-5">
            {Contents.experiences.map((experience) => (
              <Col
                key={getTranslatedTitle(
                  experience.title,
                  i18n.language as LanguageType,
                )}
              >
                <ProjectCard
                  title={getTranslatedTitle(
                    experience.title,
                    i18n.language as LanguageType,
                  )}
                  titleComponent="h3"
                  description={
                    experience.description?.[i18n.language as LanguageType]
                  }
                  cover={
                    experience.cover ?? 'https://via.placeholder.com/1920x1080'
                  }
                  url={experience.url}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Section>
  )
}

export default memo(ExperienceSection)
