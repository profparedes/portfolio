import { memo } from 'react'

import { IoMdMenu } from 'react-icons/io'

import LanguageSwitcher from 'components/LanguageSwitcher'

import { HeaderContainer, MenuButton } from './style'

interface IHeaderProps {
  onClickOnMenuButton: () => void
}

const Header: React.FC<IHeaderProps> = ({ onClickOnMenuButton }) => (
  <HeaderContainer>
    <MenuButton type="button" onClick={onClickOnMenuButton}>
      <IoMdMenu size={48} />
    </MenuButton>
    <div style={{ marginLeft: 'auto' }}>
      <LanguageSwitcher />
    </div>
  </HeaderContainer>
)

export default memo(Header)
