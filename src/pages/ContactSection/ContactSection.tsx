import { memo } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { MdOutlineEmail } from 'react-icons/md'
import { SiWhatsapp, SiGithub, SiLinkedin } from 'react-icons/si'

import Signature from 'assets/signature.png'

import Config from 'Config'

import List, { ListItem } from 'components/List'
import Section from 'components/Section'
import Text from 'components/Text'

const ContactSection: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Section id="contact" title={t('sections.contact.title') as string}>
      <Container fluid className="mb-5 pb-5">
        <Row className="row-cols-1 row-cols-md-2 g-4">
          {(Config.profile.email || Config.profile.whatsapp.label) && (
            <Col>
              <List>
                {Config.profile.email && (
                  <ListItem
                    icon={MdOutlineEmail}
                    label={Config.profile.email}
                  />
                )}
                {Config.profile.whatsapp && (
                  <ListItem
                    icon={SiWhatsapp}
                    label={Config.profile.whatsapp.label}
                    linkTo={Config.profile.whatsapp.url}
                  />
                )}
              </List>
            </Col>
          )}
          {(Config.profile.linkedin || Config.profile.github) && (
            <Col>
              <List>
                {Config.profile.linkedin && (
                  <ListItem
                    icon={SiLinkedin}
                    label={Config.profile.linkedin?.replaceAll(
                      'https://linkedin.com/in/',
                      '',
                    )}
                    linkTo={Config.profile.linkedin}
                  />
                )}
                {Config.profile.github && (
                  <ListItem
                    icon={SiGithub}
                    label={Config.profile.github?.replaceAll(
                      'https://github.com/',
                      '',
                    )}
                    linkTo={Config.profile.github}
                  />
                )}
              </List>
            </Col>
          )}
        </Row>
      </Container>
      <div className="d-flex flex-column align-items-center py-5 my-5 color-black-10">
        <Text className="mb-5" as="p">
          {t('sections.contact.thanks')}
        </Text>
        <img
          style={{ maxWidth: '300px' }}
          src={Signature}
          alt="Signature"
          className="img-fluid"
        />
      </div>
    </Section>
  )
}

export default memo(ContactSection)
