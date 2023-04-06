import React, { memo, useMemo } from 'react'

import { useTranslation } from 'react-i18next'
import { IconType } from 'react-icons'

import Text from 'components/Text'

import { pluralize } from 'helpers'

import { SkillCardContainer, SkillCardHeader } from './style'

interface ISkillCardProps {
  icon: IconType
  iconColor?: string
  title: string
  titleComponent?: keyof JSX.IntrinsicElements
  yearsOfExperience?: number
  customExperienceLabel?: string
}

const SkillCard: React.FC<ISkillCardProps> = ({
  icon: Icon,
  iconColor,
  title,
  titleComponent = 'p',
  yearsOfExperience,
  customExperienceLabel,
}) => {
  const { t } = useTranslation()

  const experienceLabel = useMemo(() => {
    if (customExperienceLabel)
      return t('skillCardExperienceLabel.academic-experience')

    if (yearsOfExperience) {
      return t('skillCardExperienceLabel.years', {
        total: yearsOfExperience,
        years: pluralize(t('words.year'), t('words.years'), yearsOfExperience),
      })
    }

    return ''
  }, [customExperienceLabel, t, yearsOfExperience])

  return (
    <SkillCardContainer>
      <SkillCardHeader>
        <Icon size={36} color={iconColor} />
        <Text as={titleComponent} className="font-size-2 regular m-0">
          {title}
        </Text>
      </SkillCardHeader>
      {experienceLabel.length > 0 && (
        <p className="font-size-1 color-accent m-0">{experienceLabel}</p>
      )}
    </SkillCardContainer>
  )
}

export default memo(SkillCard)
