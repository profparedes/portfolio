import React, { memo } from 'react'

interface ITextProps {
  as?: keyof JSX.IntrinsicElements
  children: React.ReactNode
  className?: string
}

const Text: React.FC<ITextProps> = ({ as = 'p', className, children }) =>
  React.createElement(as, { className }, children)

export default memo(Text)
