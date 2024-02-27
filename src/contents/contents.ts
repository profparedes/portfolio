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
  SiJest,
  SiHtml5,
  SiJavascript,
  // SiJira,
  SiTrello,
  SiLaravel,
  SiMysql,
  SiPhp,
  SiTypescript,
  SiMui,
} from 'react-icons/si'
import { VscJson } from 'react-icons/vsc'

import FerragensLogo from 'assets/companies/3f.jpg'
import JornadaDoDevLogo from 'assets/companies/jornadadodev.jpg'
import RaltecBr from 'assets/companies/raltecBr.jpeg'
import SenaiLogo from 'assets/companies/senai.png'
import ArSolucoesScreenshot from 'assets/screenshots/ar-solucoes.png'
import CustomerScreenshot from 'assets/screenshots/costumer-screenshot.png'
import FabioLabScreenshot from 'assets/screenshots/fabio-lab.png'
import HowhowScreenshot from 'assets/screenshots/howhow.png'
import ImovelApiScreenshot from 'assets/screenshots/imovel-api.png'
import InspiraScreenshot from 'assets/screenshots/inspira.jpeg'
import JornadaDoDevScreenshot from 'assets/screenshots/jornada-do-dev.png'
import LegalideScreenshot from 'assets/screenshots/legalide.png'
import MaricaScreenshot from 'assets/screenshots/marica.png'
import MarvelScreenshot from 'assets/screenshots/marvel.png'
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
        tech: 'React Native',
        since: 2023,
        icon: DiReact,
        iconColor: '#e91e63',
      },
      {
        tech: 'Typescript',
        since: 2020,
        icon: SiTypescript,
        iconColor: '#3478C6',
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
        iconColor: '#214ce5',
      },
      {
        tech: 'Bootstrap',
        since: 2019,
        icon: SiBootstrap,
        iconColor: '#7509f6',
      },
      {
        tech: 'Material UI',
        since: 2021,
        icon: SiMui,
        iconColor: '#017bf8',
      },
      {
        tech: 'HTML',
        since: 2019,
        icon: SiHtml5,
        iconColor: '#D45836',
      },
      {
        tech: 'Jest',
        since: 2021,
        icon: SiJest,
        iconColor: '#c63d14',
      },
    ],
    'Back-end': [
      {
        tech: 'PHP',
        since: 2021,
        icon: SiPhp,
        iconColor: '#7377ad',
      },
      {
        tech: 'Laravel',
        since: 2021,
        icon: SiLaravel,
        iconColor: '#EA4331',
      },
    ],
    Database: [
      {
        tech: 'MySQL',
        since: 2020,
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
        since: 2020,
        icon: SiDocker,
        iconColor: '#2496ED',
      },
      // {
      //   tech: 'Jira',
      //   since: 2020,
      //   icon: SiJira,
      //   iconColor: '#0052CC',
      // },
      {
        tech: 'Trello',
        since: 2020,
        icon: SiTrello,
        iconColor: '#0079bf',
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
        title: 'Inspira',
        url: 'https://opetinspira.com.br',
        cover: InspiraScreenshot,
      },
      {
        title: 'Jornada do Dev',
        url: 'https://jornadadodev.com.br',
        cover: JornadaDoDevScreenshot,
      },
      {
        title: {
          'pt-BR': 'Guia oficial de turismo de Maricá/RJ',
          en: 'Maricá/RJ Tourism Office clone',
        },
        url: 'https://marica.fabioparedes.dev',
        cover: MaricaScreenshot,
      },
      {
        title: 'Marvel',
        url: 'https://marvel.fabioparedes.dev',
        cover: MarvelScreenshot,
      },
      {
        title: 'Howhow',
        url: 'https://howhow.fabioparedes.dev',
        cover: HowhowScreenshot,
      },
      {
        title: 'Organic shop',
        url: 'https://organic.fabioparedes.dev',
        cover: OrganicScreenshot,
      },
      {
        title: 'Legalide',
        url: 'https://legalide.fabioparedes.dev',
        cover: LegalideScreenshot,
      },
      {
        title: 'Pokemon',
        url: 'https://pokemon.fabioparedes.dev',
        cover: PokemonScreenshot,
      },
      {
        title: 'Rick & Morty',
        url: 'https://rick-and-morty.fabioparedes.dev/',
        cover: RickAndMortyScreenshot,
      },
      {
        title: 'Space Motors',
        url: 'https://spacemotors.fabioparedes.dev',
        cover: SpaceMotorsScreenshot,
      },
    ],
    JavaScript: [
      {
        title: 'R6Skins',
        url: 'https://r6skins.fabioparedes.dev',
        cover: r6skinsScreenshot,
      },
      {
        title: 'AR Soluções',
        url: 'https://profparedes.github.io/arsolucoes/',
        cover: ArSolucoesScreenshot,
      },
      {
        title: 'FabioLab Store',
        url: 'https://fabiolab.fabioparedes.dev',
        cover: FabioLabScreenshot,
      },
    ],
    Laravel: [
      {
        title: 'Imovel api',
        url: 'https://github.com/profparedes/imovel-api',
        cover: ImovelApiScreenshot,
      },
      {
        title: {
          'pt-BR': 'Gerenciamento de clientes',
          en: 'Customer management',
        },
        url: 'https://github.com/profparedes/customer-reg',
        cover: CustomerScreenshot,
      },
    ],
  },
  experiences: [
    {
      title: 'Raltec BR',
      description: {
        'pt-BR': 'Desenvolvedor Front-end',
        en: 'Front-End developer',
      },
      url: 'https://raltecbr.com/',
      cover: RaltecBr,
    },
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
      cover: JornadaDoDevLogo,
    },
    {
      title: 'Firjan SENAI',
      description: {
        'pt-BR': 'Instrutor de automação e projetos',
        en: 'Professor of automation and projects',
      },
      url: 'https://www.firjansenai.com.br/',
      cover: SenaiLogo,
    },
    {
      title: 'Ferragens 3F',
      description: {
        'pt-BR': 'Projetista',
        en: 'Designer',
      },
      url: 'https://www.3f.com.br/',
      cover: FerragensLogo,
    },
  ],
  aboutMe: {
    'pt-BR': [
      'Olá, meu nome é Fábio Paredes e sou formado em engenharia de produção, além de possuir uma pós-graduação em engenharia de soldagem.',
      'Aos 16 anos, enquanto cursava Mecânica no SENAI, tive a oportunidade de participar da Olimpíada do Conhecimento, um evento que reúne alunos de todo o país para testar seus conhecimentos técnicos em uma competição a nível nacional.',
      'Após o evento, trabalhei no ramo Offshore, como projetista em diversas empresas e, posteriormente, retornei ao SENAI, desta vez para atuar como professor por 11 anos.',
      'Durante esse tempo, participei de diversos projetos institucionais, até me tornar coordenador do FabLab (um laboratório de prototipagem) ali eu comecei a aplicar a programação na robótica e me aproximar cada vez mais pela tecnologia.',
      'Em 2018 que iniciei meus estudos em programação web e fui evoluindo a cada dia nas tecnologias que eu aplico hoje!',
      'Atualmente, trabalho como desenvolvedor Full-Stack na mesma escola em que aprendi a programar e busco constantemente novas oportunidades para aprimorar meus conhecimentos.',
      'Vamos nos conhecer, meus contatos estão logo abaixo!',
    ],
    en: [
      'Hello, my name is Fábio Paredes and I have a degree in production engineering, as well as a post-graduate degree in welding engineering.',
      'At the age of 16, while studying Mechanics at SENAI, I had the opportunity to participate in the Knowledge Olympics, an event that brings together students from all over the country to test their technical knowledge in a national competition.',
      'After the event, I worked in the Offshore industry as a designer in various companies and later returned to SENAI, this time to work as a teacher for 11 years.',
      'During this time, I participated in several institutional projects until I became the coordinator of FabLab (a prototyping laboratory), where I started applying programming to robotics and getting closer to tecnologies more and more.',
      'In 2018, I began my studies in web programming and have been evolving in the technologies that I apply today, every day!',
      'Currently, I work as a Full-Stack developer at the same school where I learned to program, and I am constantly seeking new opportunities to improve my skills.',
      "Let's get to know each other, my contacts are down below!",
    ],
  },
}

export default Contents
