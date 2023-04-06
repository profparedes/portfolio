import { memo, useCallback } from 'react'

import { useTranslation } from 'react-i18next'

import BrazilFlag from 'assets/brazil-flag.png'
import USAFlag from 'assets/usa-flag.png'

import { FlagButton, LanguageSwitcherContainer } from './style'

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation()

  const handleChangeLanguage = useCallback(
    (lng: string) => i18n.changeLanguage(lng),
    [i18n],
  )

  return (
    <LanguageSwitcherContainer>
      <p className="d-none d-md-block">{t('translation.language')}</p>
      <FlagButton
        className={i18n.language === 'en' ? 'active' : undefined}
        type="button"
        onClick={() => handleChangeLanguage('en')}
        title="English"
      >
        <img src={USAFlag} alt="USA flag" />
      </FlagButton>
      <FlagButton
        className={i18n.language === 'pt-BR' ? 'active' : undefined}
        type="button"
        onClick={() => handleChangeLanguage('pt-BR')}
        title="Português"
      >
        <img src={BrazilFlag} alt="Brazil flag" />
      </FlagButton>
    </LanguageSwitcherContainer>
  )
}

export default memo(LanguageSwitcher)
