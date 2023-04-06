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

import Config from 'Config'

import { getAge } from 'helpers'

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
      'Olá, meu nome é Frederico Vanelli, mas você pode me chamar de Fred.',
      `Eu sou um programador movido por amor e vocação. Meu primeiro contato com o código foi aos 12 anos e eu nunca mais parei, até hoje aos ${getAge(
        Config.profile.birthday,
      )}.`,
      'Aos 16 anos eu entrei na faculdade e, aos 20, me formei em Análise de Sistemas. Logo após eu fiz uma pós-graduação em Engenharia de Software, seguida por outra em Gestão de Projetos.',
      `Atualmente eu tenho ${
        new Date().getFullYear() - 2005
      } anos de experiência desenvolvendo aplicações baseadas na web para clientes, empresas e projetos pessoais. Sempre fui full-stack e trabalhei em todas as áreas dos projetos, back-end, front-end, APIs e até servidores de hospedagem.`,
      `Há aproximadamente ${
        new Date().getFullYear() - 2018
      } anos eu me apaixonei pelo React e desde então mudei toda a minha carreira para esse lado. Ultimamente eu tenho participado mais ativamente em projetos de front-end (mas eu também adoro trabalhar no back-end).`,
      'Eu também tenho 6 anos de experiência como Tech Leader.',
      'Vamos nos conhecer, meus contatos estão logo abaixo!',
    ],
    en: [
      'Hello, my name is Frederico Vanelli, but you can call me Fred.',
      `I am a developer out of love and vocation. My first contact with code was at the age of 12 and I never stopped until today, at the age of ${getAge(
        Config.profile.birthday,
      )}.`,
      'When I was 16 I entered college and graduated in Systems Analysis at the age of 20. Soon after I did a postgraduate degree in Software Engineering, followed by a degree in Project Management.',
      `I currently have ${
        new Date().getFullYear() - 2005
      } years of experience in developing web applications for clients, companies and personal projects. Always being full-stack and developing all areas of the project, back-end, front-end, APIs and even configuring hosting servers.`,
      `About ${
        new Date().getFullYear() - 2018
      } years ago I fell in love with React and I have changed my career to that side. Lately I have been participating more actively in front-end projects (but I also love working on the back-end side).`,
      'I also have 6 years of experience working as Tech Leader.',
      "Let's get to know each other, my contacts are down below!",
    ],
  },
}

export default Contents
