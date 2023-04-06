import { memo } from 'react'

import { IconType } from 'react-icons'

import Config from 'Config'

import Text from 'components/Text'

import { ListContainer, ListItemContainer } from './style'

interface IListProps {
  children: React.ReactNode
}

const List: React.FC<IListProps> = ({ children }) => (
  <ListContainer>{children}</ListContainer>
)

interface IListItemProps {
  icon?: IconType
  label?: string
  children?: React.ReactNode
  linkTo?: string
}

export const ListItem: React.FC<IListItemProps> = ({
  icon: Icon,
  label,
  linkTo,
}) => (
  <ListItemContainer>
    {Icon && (
      <>
        {linkTo && (
          <a href={linkTo} target="_blank" rel="noreferrer">
            <Icon size={32} color={Config.app.accentColor} />
          </a>
        )}
        {!linkTo && <Icon size={32} color={Config.app.accentColor} />}
      </>
    )}
    {label && (
      <>
        {linkTo && (
          <a href={linkTo} target="_blank" rel="noreferrer">
            {label}
          </a>
        )}
        {!linkTo && <Text as="span">{label}</Text>}
      </>
    )}
  </ListItemContainer>
)

export default memo(List)
