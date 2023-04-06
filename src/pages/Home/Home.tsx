import { memo, useCallback, useEffect, useState } from 'react'

import { useTranslation } from 'react-i18next'

import Header from 'components/Header'
import Sidebar from 'components/Sidebar'

import useTitle from 'hooks/useTitle'

import AboutMeSection from 'pages/AboutMeSection'
import ContactSection from 'pages/ContactSection'
import ExperienceSection from 'pages/ExperienceSection'
import PortfolioSection from 'pages/PortfolioSection'
import QualificationsSection from 'pages/QualificationsSection'
import TopSection from 'pages/TopSection'

import { Main } from './style'

const Home: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(false)

  const { i18n } = useTranslation()
  const setTitle = useTitle()

  const showMenu = useCallback(() => setShowSidebar(true), [setShowSidebar])
  const hideMenu = useCallback(() => setShowSidebar(false), [setShowSidebar])

  useEffect(() => {
    setTitle()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

  return (
    <>
      <Header onClickOnMenuButton={showMenu} />
      <Sidebar show={showSidebar} onHide={hideMenu} />
      <Main>
        <TopSection />
        <QualificationsSection />
        <PortfolioSection />
        <ExperienceSection />
        <AboutMeSection />
        <ContactSection />
      </Main>
    </>
  )
}

export default memo(Home)
