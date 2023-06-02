import { IconType } from 'react-icons'
import { DiReact, DiScrum } from 'react-icons/di'
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiAdonisjs,
  SiBitbucket,
  SiBootstrap,
  SiCss3,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiRedis,
  SiTypescript,
} from 'react-icons/si'
import { VscJson } from 'react-icons/vsc'

import AncineLogo from 'assets/companies/ancine.jpg'
import CoinbaseLogo from 'assets/companies/coinbase.jpg'
import DTOLogo from 'assets/companies/dto.jpg'
import InterTvLogo from 'assets/companies/inter-tv.jpg'
import JornadaDoDevLogo from 'assets/companies/jornada-do-dev.jpg'
import PedroSupertiLogo from 'assets/companies/pedro-superti.jpg'
import ProlucentLogo from 'assets/companies/prolucent.jpg'
import SimplisafeLogo from 'assets/companies/simplisafe.jpg'
import TargetLogo from 'assets/companies/target.jpg'
import AVozDaSerraScreenshot from 'assets/screenshots/a-voz-da-serra.jpg'
import AcianfScreenshot from 'assets/screenshots/acianf.jpg'
import CoinbaseScreenshot from 'assets/screenshots/coinbase.jpg'
import EquilibriScreenshot from 'assets/screenshots/equilibri.jpg'
import InterTVScreenshot from 'assets/screenshots/inter-tv.jpg'
import JornadaDoDevScreenshot from 'assets/screenshots/jornada-do-dev.jpg'
import LiquidCompassScreenshot from 'assets/screenshots/liquid-compass.jpg'
import LiveStreamingScreenshot from 'assets/screenshots/live-streaming.jpg'
import LivesScreenshot from 'assets/screenshots/lives.jpg'
import MaricaAdminScreenshot from 'assets/screenshots/marica-admin.jpg'
import MaricaAppAndroidScreenshot from 'assets/screenshots/marica-app-android.jpg'
import MaricaAppIosScreenshot from 'assets/screenshots/marica-app-ios.jpg'
import MaricaScreenshot from 'assets/screenshots/marica.jpg'
import SnakeInfinityScreenshot from 'assets/screenshots/snake-infinity.jpg'

import { LanguageType } from 'types'

export type QualificationKeyType =
  | 'Front-end'
  | 'Back-end'
  | 'Database'
  | 'Design and UX'
  | 'Others'

export type ProjectKeyType = 'React JS' | 'React Native' | 'Laravel' | 'Drupal'

type ProjectType = {
  title: string | Record<LanguageType, string>
  description?: Record<LanguageType, string>
  url?: string
  cover?: string
}

type QualificationType = {
  tech: string
  since?: number
  icon: IconType
  iconColor: string
  customLabel?: string
}

type ContentsType = {
  qualifications: Record<QualificationKeyType, QualificationType[]>
  projects: Record<ProjectKeyType, ProjectType[]>
  experiences: ProjectType[]
  aboutMe: Record<LanguageType, string[]>
}

const Contents: ContentsType = {
  qualifications: {
    'Front-end': [
      {
        tech: 'React JS',
        since: 2018,
        icon: DiReact,
        iconColor: '#81D6F6',
      },
      {
        tech: 'Typescript',
        since: 2018,
        icon: SiTypescript,
        iconColor: '3478C6',
      },
      {
        tech: 'Javascript',
        since: 2006,
        icon: SiJavascript,
        iconColor: '#F3E050',
      },
      {
        tech: 'CSS',
        since: 2005,
        icon: SiCss3,
        iconColor: '#5499D2',
      },
      {
        tech: 'Bootstrap',
        since: 2013,
        icon: SiBootstrap,
        iconColor: 'white',
      },
      {
        tech: 'HTML',
        since: 2005,
        icon: SiHtml5,
        iconColor: '#D45836',
      },
      {
        tech: 'Next JS',
        icon: SiNextdotjs,
        iconColor: 'white',
        customLabel: 'Academic experience',
      },
    ],
    'Back-end': [
      {
        tech: 'Laravel',
        since: 2014,
        icon: SiLaravel,
        iconColor: '#EA4331',
      },
      {
        tech: 'Express',
        since: 2019,
        icon: SiExpress,
        iconColor: 'white',
      },
      {
        tech: 'NodeJS',
        since: 2019,
        icon: SiNodedotjs,
        iconColor: '#99C65D',
      },
      {
        tech: 'PHP',
        since: 2005,
        icon: SiPhp,
        iconColor: '#5499D2',
      },
      {
        tech: 'AdonisJS',
        since: 2019,
        icon: SiAdonisjs,
        iconColor: 'white',
        customLabel: 'Academic experience',
      },
    ],
    Database: [
      {
        tech: 'MySQL',
        since: 2005,
        icon: SiMysql,
        iconColor: 'white',
      },
      {
        tech: 'PostgreSQL',
        since: 2019,
        icon: SiPostgresql,
        iconColor: 'white',
      },
      {
        tech: 'Redis',
        since: 2014,
        icon: SiRedis,
        iconColor: '#D82C20',
      },
      {
        tech: 'MongoDB',
        since: 2014,
        icon: SiMongodb,
        iconColor: '#47A248',
      },
    ],
    'Design and UX': [
      {
        tech: 'Adobe XD',
        since: 2019,
        icon: SiAdobexd,
        iconColor: '#FF26BE',
      },
      {
        tech: 'Adobe Photoshop',
        since: 2005,
        icon: SiAdobephotoshop,
        iconColor: '#31A8FF',
      },
      {
        tech: 'Figma',
        icon: SiFigma,
        iconColor: '#F24E1E',
        customLabel: 'Academic experience',
      },
    ],
    Others: [
      {
        tech: 'Git',
        since: 2014,
        icon: SiGit,
        iconColor: '#F05032',
      },
      {
        tech: 'GitHub',
        since: 2014,
        icon: SiGithub,
        iconColor: 'white',
      },
      {
        tech: 'Bitbucket',
        since: 2019,
        icon: SiBitbucket,
        iconColor: '#2684FF',
      },
      {
        tech: 'Docker',
        since: 2019,
        icon: SiDocker,
        iconColor: '#2496ED',
      },
      {
        tech: 'Jira',
        since: 2019,
        icon: SiJira,
        iconColor: '#0052CC',
      },
      {
        tech: 'Restful API',
        since: 2018,
        icon: VscJson,
        iconColor: 'white',
      },
      {
        tech: 'GraphQL',
        since: 2021,
        icon: SiGraphql,
        iconColor: '#f4447c',
      },
      {
        tech: 'Scrum',
        since: 2019,
        icon: DiScrum,
        iconColor: '#79c2d0',
      },
    ],
  },
  projects: {
    'React JS': [
      {
        title: 'Coinbase',
        url: 'https://coinbase.com',
        cover: CoinbaseScreenshot,
      },
      {
        title: 'Liquid Compass',
        url: 'https://liquidcompass.com',
        cover: LiquidCompassScreenshot,
      },
      {
        title: {
          'pt-BR': 'Guia oficial de turismo de Maricá/RJ',
          en: 'Maricá/RJ Tourism Office',
        },
        url: 'https://conhecamarica.com.br',
        cover: MaricaScreenshot,
      },
      {
        title: {
          'pt-BR': 'Snake Infinity (jogo da cobrinha on-line)',
          en: 'Snake Infinity (on-line snake game)',
        },
        url: 'https://snakeinfinity.netlify.app/',
        cover: SnakeInfinityScreenshot,
      },
      {
        title: {
          'pt-BR': 'Sistema de streaming de vídeos',
          en: 'Video streaming system',
        },
        url: 'https://bit.ly/subsreact',
        cover: LiveStreamingScreenshot,
      },
      {
        title: {
          'pt-BR': 'Sistema de transmissão de aulas ao vivo',
          en: 'Live classes broadcast system',
        },
        url: 'https://bit.ly/lives2react',
        cover: LivesScreenshot,
      },
    ],
    'React Native': [
      {
        title: {
          'pt-BR': 'App oficial de turismo de Maricá/RJ (Android)',
          en: 'Maricá/RJ Tourism Office app (Android)',
        },
        url: 'https://bit.ly/appmarica',
        cover: MaricaAppAndroidScreenshot,
      },
      {
        title: {
          'pt-BR': 'App oficial de turismo de Maricá/RJ (iOS)',
          en: 'Maricá/RJ Tourism Office app (iOS)',
        },
        url: 'https://bit.ly/iosmarica',
        cover: MaricaAppIosScreenshot,
      },
    ],
    Laravel: [
      {
        title: {
          'pt-BR': 'Sistema de gestão de pontos turísticos de Maricá/RJ',
          en: 'Maricá/RJ Tourism Office management system',
        },
        url: 'https://bit.ly/app-marica',
        cover: MaricaAdminScreenshot,
      },
      {
        title: {
          'pt-BR': 'Sistema de gestão de projetos da Inter TV (Rede Globo)',
          en: 'Inter TV (Globo TV Network) project management system',
        },
        url: 'https://bit.ly/sistema-intertv',
        cover: InterTVScreenshot,
      },
      {
        title: {
          'pt-BR': 'Sistema de gestão de vagas de emprego',
          en: 'Jobs management system',
        },
        url: 'https://bit.ly/sistema-empregos',
        cover: AcianfScreenshot,
      },
      {
        title: 'Equilibri App',
        url: 'https://equilibriapp.com.br',
        cover: EquilibriScreenshot,
      },
    ],
    Drupal: [
      {
        title: {
          'pt-BR': 'Jornal A Voz da Serra',
          en: 'A Voz da Serra Online Newspaper',
        },
        url: 'https://avozdaserra.com.br',
        cover: AVozDaSerraScreenshot,
      },
      {
        title: {
          'pt-BR': 'Jornada do Dev',
          en: "Dev's Journey Programming Courses",
        },
        url: 'https://jornadadodev.com.br',
        cover: JornadaDoDevScreenshot,
      },
    ],
  },
  experiences: [
    {
      title: 'Coinbase',
      description: {
        'pt-BR': 'Desenvolvedor Front-end Sênior (React JS)',
        en: 'Senior Front-end (React JS) developer',
      },
      url: 'https://coinbase.com',
      cover: CoinbaseLogo,
    },
    {
      title: 'Prolucent Health',
      description: {
        'pt-BR': 'Desenvolvedor Full-Stack Sênior (React JS/Laravel)',
        en: 'Senior Full-Stack (React JS/Laravel) developer',
      },
      url: 'https://prolucent.com',
      cover: ProlucentLogo,
    },
    {
      title: 'SimpliSafe',
      description: {
        'pt-BR': 'Desenvolvedor Front-end Sênior (React JS)',
        en: 'Senior Front-end (React JS) developer',
      },
      url: 'https://simplisafe.com',
      cover: SimplisafeLogo,
    },
    {
      title: {
        'pt-BR': 'Agência Nacional do Cinema (Ancine)',
        en: 'Brazil National Film Agency (Ancine)',
      },
      description: {
        'pt-BR': 'Desenvolvedor Drupal',
        en: 'Drupal developer',
      },
      url: 'https://www.gov.br/ancine',
      cover: AncineLogo,
    },
    {
      title: {
        'pt-BR': 'Jornada do Dev',
        en: "Dev's Journey",
      },
      description: {
        'pt-BR': 'Desenvolvedor Drupal',
        en: 'Drupal developer',
      },
      url: 'https://jornadadodev.com.br',
      cover: JornadaDoDevLogo,
    },
    {
      title: {
        'pt-BR': 'Inter TV (Rede Globo)',
        en: 'Inter TV (Globo TV Network)',
      },
      description: {
        'pt-BR': 'Desenvolvedor Back-end (PHP)',
        en: 'Back-end (PHP) Developer',
      },
      url: 'https://redeglobo.globo.com/rj/intertvrj',
      cover: InterTvLogo,
    },
    {
      title: 'Pedro Superti',
      description: {
        'pt-BR':
          'Tech leader e Desenvolvedor Full-Stack Sênior (React JS/NodeJS/Laravel)',
        en: 'Tech leader and Senior Full-Stack (React JS/NodeJS/Laravel) developer',
      },
      url: 'https://pedrosuperti.com.br/bio',
      cover: PedroSupertiLogo,
    },
    {
      title: {
        'pt-BR': 'DTO Publicidade',
        en: 'DTO Advertising',
      },
      description: {
        'pt-BR': 'Desenvolvedor Full-Stack Sênior (React JS/Laravel)',
        en: 'Senior Full-Stack (React JS/Laravel) developer',
      },
      url: 'https://dtopublicidade.com.br',
      cover: DTOLogo,
    },
    {
      title: {
        'pt-BR': 'Target Comunicação',
        en: 'Target Advertising',
      },
      description: {
        'pt-BR': 'Desenvolvedor Back-end (PHP)',
        en: 'Back-end (PHP) Developer',
      },
      url: 'https://targetcomunica.com.br',
      cover: TargetLogo,
    },
  ],
  aboutMe: {
    'pt-BR': [
      'Olá, meu nome é Fábio Paredes e sou formado em engenharia de produção, além de possuir uma pós-graduação em engenharia de soldagem.',
      'Aos 16 anos, enquanto cursava Mecânica no SENAI, tive a oportunidade de participar da Olimpíada do Conhecimento, um evento que reúne alunos de todo o país para testar seus conhecimentos técnicos em uma competição a nível nacional.',
      'Após o evento, trabalhei no ramo Offshore, como projetista em diversas empresas e, posteriormente, retornei ao SENAI, desta vez para atuar como professor por 11 anos.',
      'Durante esse tempo, participei de diversos projetos institucionais, porém percebi que minha carreira não estava evoluindo como eu desejava e decidi mudar de área.',
      'Foi em 2020 que iniciei meus estudos em programação e me apaixonei pelo segmento.',
      'Atualmente, trabalho como desenvolvedor Full-Stack na mesma escola em que aprendi a programar e busco constantemente novas oportunidades para aprimorar meus conhecimentos.',
      'Vamos nos conhecer, meus contatos estão logo abaixo!',
    ],
    en: [
      'Hello, my name is Fábio Paredes and I have a degree in production engineering, as well as a post-graduate degree in welding engineering.',
      'At the age of 16, while studying Mechanics at SENAI, I had the opportunity to participate in the Knowledge Olympics, an event that brings together students from all over the country to test their technical knowledge in a national competition.',
      'After the event, I worked in the Offshore industry as a designer in various companies and later returned to SENAI, this time to work as a teacher for 11 years.',
      'During this time, I participated in several institutional projects, but I realized that my career was not evolving as I wanted, so I decided to change my area of expertise.',
      'It was in 2020 that I started studying programming and fell in love with this segment.',
      'Currently, I work as a Full-Stack developer at the same school where I learned to program, and I am constantly seeking new opportunities to improve my skills.',
      "Let's get to know each other, my contacts are down below!",
    ],
  },
}

export default Contents
