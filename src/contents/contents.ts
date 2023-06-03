import { IconType } from 'react-icons'
import { DiReact, DiScrum } from 'react-icons/di'
import {
  SiAdobephotoshop,
  SiBootstrap,
  SiCss3,
  SiDocker,
  SiFigma,
  SiGit,
  SiGithub,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiLaravel,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiTypescript,
} from 'react-icons/si'
import { VscJson } from 'react-icons/vsc'

import SenaiLogo from 'assets/companies/senai.png'
import ArSolucoesScreenshot from 'assets/screenshots/ar-solucoes.png'
import FabioLabScreenshot from 'assets/screenshots/fabio-lab.png'
import ImovelApiScreenshot from 'assets/screenshots/imovel-api.png'
import JornadaDoDev from 'assets/screenshots/jornada-do-dev.png'
import LegalideScreenshot from 'assets/screenshots/legalide.png'
import MaricaScreenshot from 'assets/screenshots/marica.png'
import OrganicScreenshot from 'assets/screenshots/organic.png'
import PokemonScreenshot from 'assets/screenshots/pokemon.png'
import r6skinsScreenshot from 'assets/screenshots/r6skins.png'
import RickAndMortyScreenshot from 'assets/screenshots/rickandmorty.png'
import SpaceMotorsScreenshot from 'assets/screenshots/space-motors.png'

import { LanguageType } from 'types'

export type QualificationKeyType =
  | 'Front-end'
  | 'Back-end'
  | 'Database'
  | 'Design and UX'
  | 'Others'

export type ProjectKeyType = 'React JS' | 'JavaScript' | 'Laravel'

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
        since: 2020,
        icon: DiReact,
        iconColor: '#81D6F6',
      },
      {
        tech: 'Typescript',
        since: 2020,
        icon: SiTypescript,
        iconColor: '3478C6',
      },
      {
        tech: 'Javascript',
        since: 2019,
        icon: SiJavascript,
        iconColor: '#F3E050',
      },
      {
        tech: 'CSS',
        since: 2019,
        icon: SiCss3,
        iconColor: '#5499D2',
      },
      {
        tech: 'Bootstrap',
        since: 2019,
        icon: SiBootstrap,
        iconColor: 'white',
      },
      {
        tech: 'HTML',
        since: 2019,
        icon: SiHtml5,
        iconColor: '#D45836',
      },
    ],
    'Back-end': [
      {
        tech: 'PHP',
        since: 2020,
        icon: SiPhp,
        iconColor: '#5499D2',
      },
      {
        tech: 'Laravel',
        since: 2020,
        icon: SiLaravel,
        iconColor: '#EA4331',
      },
      {
        tech: 'NodeJS',
        since: 2019,
        icon: SiNodedotjs,
        iconColor: '#99C65D',
      },
    ],
    Database: [
      {
        tech: 'MySQL',
        since: 2019,
        icon: SiMysql,
        iconColor: 'white',
      },
    ],
    'Design and UX': [
      {
        tech: 'Adobe Photoshop',
        since: 2010,
        icon: SiAdobephotoshop,
        iconColor: '#31A8FF',
      },
      {
        tech: 'Figma',
        since: 2020,
        icon: SiFigma,
        iconColor: '#F24E1E',
      },
    ],
    Others: [
      {
        tech: 'Git',
        since: 2019,
        icon: SiGit,
        iconColor: '#F05032',
      },
      {
        tech: 'GitHub',
        since: 2019,
        icon: SiGithub,
        iconColor: 'white',
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
        since: 2019,
        icon: VscJson,
        iconColor: 'white',
      },
      {
        tech: 'GraphQL',
        since: 2020,
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
        title: {
          'pt-BR': 'Guia oficial de turismo de Maricá/RJ',
          en: 'Maricá/RJ Tourism Office clone',
        },
        url: 'https://profparedes-conheca-marica.netlify.app/',
        cover: MaricaScreenshot,
      },
      {
        title: 'Organic shop',
        url: 'https://profparedes-organic.netlify.app/about',
        cover: OrganicScreenshot,
      },
      {
        title: 'Legalide',
        url: 'https://profparedes-legalide.netlify.app/',
        cover: LegalideScreenshot,
      },
      {
        title: 'Pokemon',
        url: 'https://profparedes-pokemon.netlify.app/',
        cover: PokemonScreenshot,
      },
      {
        title: 'Rick & Morty',
        url: 'https://profparedes-rick-and-morty.netlify.app/',
        cover: RickAndMortyScreenshot,
      },
      {
        title: 'Space Motors',
        url: 'https://profparedes-space-motors.netlify.app/',
        cover: SpaceMotorsScreenshot,
      },
    ],
    JavaScript: [
      {
        title: 'R6Skins',
        url: 'https://profparedes-r6skins.netlify.app/',
        cover: r6skinsScreenshot,
      },
      {
        title: 'AR Soluções',
        url: 'https://profparedes.github.io/arsolucoes/',
        cover: ArSolucoesScreenshot,
      },
      {
        title: 'FabioLab Store',
        url: 'https://profparedes-fabiolab.netlify.app/',
        cover: FabioLabScreenshot,
      },
    ],
    Laravel: [
      {
        title: 'Imovel api',
        url: 'https://github.com/profparedes/imovel-api',
        cover: ImovelApiScreenshot,
      },
    ],
  },
  experiences: [
    {
      title: {
        'pt-BR': 'Jornada do Dev',
        en: "Dev's Journey",
      },
      description: {
        'pt-BR': 'Desenvolvedor Full-stack',
        en: 'Full-stack developer',
      },
      url: 'https://jornadadodev.com.br',
      cover: JornadaDoDev,
    },
    {
      title: {
        'pt-BR': 'Firjan SENAI',
        en: 'Firjan SENAI',
      },
      description: {
        'pt-BR': 'Instrutor de automação',
        en: 'Automation instructor',
      },
      cover: SenaiLogo,
    },
  ],
  aboutMe: {
    'pt-BR': [
      'Olá, meu nome é Fábio Paredes e sou formado em engenharia de produção, além de possuir uma pós-graduação em engenharia de soldagem.',
      'Aos 16 anos, enquanto cursava Mecânica no SENAI, tive a oportunidade de participar da Olimpíada do Conhecimento, um evento que reúne alunos de todo o país para testar seus conhecimentos técnicos em uma competição a nível nacional.',
      'Após o evento, trabalhei no ramo Offshore, como projetista em diversas empresas e, posteriormente, retornei ao SENAI, desta vez para atuar como professor por 11 anos.',
      'Durante esse tempo, participei de diversos projetos institucionais, porém percebi que minha carreira não estava evoluindo como eu desejava e decidi mudar de área.',
      'Foi em 2019 que iniciei meus estudos em programação e me apaixonei pelo segmento.',
      'Atualmente, trabalho como desenvolvedor Full-Stack na mesma escola em que aprendi a programar e busco constantemente novas oportunidades para aprimorar meus conhecimentos.',
      'Vamos nos conhecer, meus contatos estão logo abaixo!',
    ],
    en: [
      'Hello, my name is Fábio Paredes and I have a degree in production engineering, as well as a post-graduate degree in welding engineering.',
      'At the age of 16, while studying Mechanics at SENAI, I had the opportunity to participate in the Knowledge Olympics, an event that brings together students from all over the country to test their technical knowledge in a national competition.',
      'After the event, I worked in the Offshore industry as a designer in various companies and later returned to SENAI, this time to work as a teacher for 11 years.',
      'During this time, I participated in several institutional projects, but I realized that my career was not evolving as I wanted, so I decided to change my area of expertise.',
      'It was in 2019 that I started studying programming and fell in love with this segment.',
      'Currently, I work as a Full-Stack developer at the same school where I learned to program, and I am constantly seeking new opportunities to improve my skills.',
      "Let's get to know each other, my contacts are down below!",
    ],
  },
}

export default Contents
