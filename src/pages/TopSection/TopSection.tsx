import { memo } from 'react'

import { useTranslation } from 'react-i18next'
import { FaArrowDown } from 'react-icons/fa'

import Picture from 'assets/picture.jpg'

import { LanguageType } from 'types'

import Config from '../../Config'
import {
  GreetingText,
  ProfilePicture,
  ScrollDownButton,
  TopSectionContainer,
} from './style'

const TopSection: React.FC = () => {
  const { i18n, t } = useTranslation()

  return (
    <TopSectionContainer id="top">
      <ProfilePicture
        className="d-xl-none"
        src={Picture}
        alt={Config.profile.name}
      />

      <GreetingText
        className="bolder m-0"
        dangerouslySetInnerHTML={{
          __html: t('greeting-text', {
            name: Config.profile.name,
            job: Config.profile.profession[i18n.language as LanguageType],
          }),
        }}
      />

      <ScrollDownButton href="#qualifications" offset={100}>
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: t('scroll-down-section'),
          }}
        />
        <FaArrowDown size={36} />
      </ScrollDownButton>
    </TopSectionContainer>
  )
}

export default memo(TopSection)
