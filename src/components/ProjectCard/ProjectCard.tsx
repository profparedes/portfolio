import React, { memo } from 'react'

import Text from 'components/Text'

import { TitleLink } from './style'

interface IProjectCardProps {
  title: string
  titleComponent?: keyof JSX.IntrinsicElements
  description?: string
  cover: string
  url?: string
}

const ProjectCard: React.FC<IProjectCardProps> = ({
  title,
  titleComponent = 'p',
  description,
  cover,
  url,
}) => (
  <div>
    {url && (
      <a
        className="mb-2 d-block"
        href={url}
        title={title}
        target="_blank"
        rel="noreferrer"
      >
        <img className="img-fluid" src={cover} alt={title} />
      </a>
    )}
    {!url && <img className="img-fluid mb-2" src={cover} alt={title} />}
    {url && (
      <Text as={titleComponent} className="font-size-2 regular color-black-10">
        <TitleLink href={url} title={title} target="_blank">
          {title}
        </TitleLink>
      </Text>
    )}
    {!url && (
      <Text as={titleComponent} className="font-size-2 regular color-black-10">
        {title}
      </Text>
    )}
    {description && (
      <Text className="font-size-1 regular color-black-10 mb-2">
        <em>{description}</em>
      </Text>
    )}
    {url && (
      <a
        className="font-size-1 regular color-black-10"
        href={url}
        title={title}
        target="_blank"
        rel="noreferrer"
      >
        <em>{url}</em>
      </a>
    )}
  </div>
)

export default memo(ProjectCard)
