import { memo } from 'react'

import Contents from 'contents/contents'
import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { FiMapPin } from 'react-icons/fi'
import { MdCake } from 'react-icons/md'

import AboutPicure from 'assets/about-picture.jpg'

import Config from 'Config'

import List, { ListItem } from 'components/List'
import Section from 'components/Section'
import Text from 'components/Text'

import { getAge, translateDate } from 'helpers'

import { LanguageType } from 'types'

const AboutMeSection: React.FC = () => {
  const { i18n, t } = useTranslation()

  const paragraphs = Contents.aboutMe[i18n.language as LanguageType]

  return (
    <Section id="about-me" title={t('menu.about-me') as string}>
      <section className="mb-5">
        <Container fluid>
          <Row className="g-5">
            <Col className="col-12 col-lg-8 col-xl-12 col-xxl-8 mb-4">
              <section className="mb-5">
                <Text as="h2" className="font-size-4 bold mb-5">
                  {Config.profile.fullName}
                </Text>
                <List>
                  <ListItem
                    icon={FiMapPin}
                    label={`${Config.profile.location.city}, ${
                      Config.profile.location.state
                    }, ${
                      Config.profile.location.country[
                        i18n.language as LanguageType
                      ]
                    }`}
                  />
                  <ListItem
                    icon={MdCake}
                    label={`${translateDate(
                      Config.profile.birthday,
                      i18n.language as LanguageType,
                    )} (${getAge(Config.profile.birthday)} ${t(
                      'words.years-old',
                    )})`}
                  />
                </List>
              </section>
              {paragraphs.map((paragraph, index) => (
                <Text
                  key={index} // eslint-disable-line react/no-array-index-key
                  className={`font-size-2 ${
                    index < paragraphs.length - 1 ? 'mb-5' : ''
                  }`}
                >
                  {paragraph}
                </Text>
              ))}
            </Col>
            <Col className="col-12 col-lg-4 col-xl-12 col-xxl-4">
              <img
                className="img-fluid"
                src={AboutPicure}
                alt={Config.profile.fullName}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </Section>
  )
}

export default memo(AboutMeSection)
