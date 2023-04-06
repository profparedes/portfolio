import { memo } from 'react'

import { MenuButtonContainer } from './style'

interface IMenuButtonProps {
  label?: string
  children?: React.ReactNode
  anchor: string
  onClick: () => void
}

const MenuButton: React.FC<IMenuButtonProps> = ({
  label,
  onClick,
  children,
  anchor,
}) => (
  <MenuButtonContainer href={anchor} offset={100} onClick={onClick}>
    {label}
    {children}
  </MenuButtonContainer>
)

export default memo(MenuButton)
