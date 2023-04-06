import { Fragment, memo } from 'react'

import Contents, { QualificationKeyType } from 'contents/contents'
import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

import Section from 'components/Section'
import SkillCard from 'components/SkillCard'

const QualificationsSection: React.FC = () => {
  const { t } = useTranslation()

  const year = new Date().getFullYear()

  return (
    <Section id="qualifications" title={t('menu.qualifications') as string}>
      {Object.keys(Contents.qualifications).map((key) => (
        <section key={key} className="mb-5">
          <Container fluid>
            <Fragment key={key}>
              <h3 className="font-size-3 mb-4">{key}</h3>
              <Row className="row-cols-1 row-cols-sm-2 row-cols-xxl-4 g-4">
                {Contents.qualifications[key as QualificationKeyType].map(
                  (qualification) => (
                    <Col key={qualification.tech} className="d-flex">
                      <SkillCard
                        icon={qualification.icon}
                        iconColor={qualification.iconColor}
                        title={qualification.tech}
                        titleComponent="h3"
                        yearsOfExperience={
                          qualification.since
                            ? year - qualification.since
                            : undefined
                        }
                        customExperienceLabel={qualification.customLabel}
                      />
                    </Col>
                  ),
                )}
              </Row>
            </Fragment>
          </Container>
        </section>
      ))}
    </Section>
  )
}

export default memo(QualificationsSection)
