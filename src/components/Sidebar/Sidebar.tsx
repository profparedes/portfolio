import { memo } from 'react'

import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useTranslation } from 'react-i18next'
import { IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp } from 'react-icons/io5'

import Picture from 'assets/picture.jpg'

import Button from 'components/MenuButton'

import { LanguageType } from 'types'

import Config from '../../Config'
import {
  Menu,
  NameLabel,
  Overlay,
  ProfessionLabel,
  Profile,
  ProfileInfo,
  ProfilePicture,
  SidebarContainer,
  SocialLink,
  SocialMenu,
} from './style'

interface ISidebarProps {
  show?: boolean
  onHide: () => void
}

const Sidebar: React.FC<ISidebarProps> = ({ show = false, onHide }) => {
  const { i18n, t } = useTranslation()

  return (
    <>
      <SidebarContainer className={show ? 'show' : 'hide'}>
        <Profile>
          <div className="mx-2">
            <AnchorLink href="#top" onClick={onHide}>
              <ProfilePicture
                className="mb-4"
                src={Picture}
                alt={Config.profile.name}
              />
            </AnchorLink>
          </div>
          <ProfileInfo>
            <NameLabel>
              <AnchorLink
                className="text-decoration-none"
                href="#top"
                onClick={onHide}
              >
                {Config.profile.name}
              </AnchorLink>
            </NameLabel>
            <ProfessionLabel
              className="color-black-10"
              dangerouslySetInnerHTML={{
                __html: Config.profile.profession[
                  i18n.language as LanguageType
                ] as string,
              }}
            />
          </ProfileInfo>
        </Profile>
        <Menu className="text-center">
          <Button
            label={t('menu.qualifications') as string}
            anchor="#qualifications"
            onClick={onHide}
          />
          <Button
            label={t('menu.portfolio') as string}
            anchor="#portfolio"
            onClick={onHide}
          />
          <Button
            label={t('menu.experience') as string}
            anchor="#experience"
            onClick={onHide}
          />
          <Button
            label={t('menu.about-me') as string}
            anchor="#about-me"
            onClick={onHide}
          />
          <Button
            label={t('menu.contact') as string}
            anchor="#contact"
            onClick={onHide}
          />
        </Menu>
        {(Config.profile.linkedin ||
          Config.profile.github ||
          Config.profile.whatsapp.url) && (
          <SocialMenu>
            {Config.profile.linkedin && (
              <SocialLink
                href={Config.profile.linkedin}
                title="Linked In"
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoLinkedin size={32} />
              </SocialLink>
            )}
            {Config.profile.github && (
              <SocialLink
                href={Config.profile.github}
                title="GitHub"
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoGithub size={32} />
              </SocialLink>
            )}
            {Config.profile.whatsapp.url && (
              <SocialLink
                href={Config.profile.whatsapp.url}
                title="Whatsapp"
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoWhatsapp size={32} />
              </SocialLink>
            )}
          </SocialMenu>
        )}
      </SidebarContainer>
      <Overlay
        type="button"
        className={show ? 'show' : 'hide'}
        onClick={onHide}
      />
    </>
  )
}

export default memo(Sidebar)
