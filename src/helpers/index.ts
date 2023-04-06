import { LanguageType } from 'types'

export const pluralize = (
  singular: string,
  plural: string,
  count: number,
): string => (count === 1 ? singular : plural)

export const translateDate = (date?: string, language?: LanguageType): string =>
  date
    ? new Date(date).toLocaleDateString(language ?? 'en', {
        dateStyle: 'short',
        timeZone: 'UTC',
      })
    : ''

export const getAge = (date?: string): number =>
  date ? new Date().getFullYear() - new Date(date).getFullYear() : 0

export const getTranslatedTitle = (
  title: string | { [key in LanguageType]: string },
  language: LanguageType,
): string =>
  typeof title === 'string' ? title : title[language as LanguageType]
