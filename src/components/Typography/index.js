import styled, { css } from 'styled-components';
import { motion } from 'framer-motion'

const color = css`
   color: ${({ theme }) => theme.colors.primary.text};
   display: flex;
  ${({ secondary }) => secondary && css`
   color: ${({ theme }) => theme.colors.secondary.text};
  `}
`

export const Title = styled(motion.h2)`
  ${color};
  font-family: ${({ theme }) => theme.typography.title.fontFamily};
  font-size: ${({ theme }) => theme.typography.title.fontSize};
  font-weight: ${({ theme }) => theme.typography.title.fontWeight};
`

export const Body = styled(motion.p)`
  ${color};
  font-family: ${({ theme }) => theme.typography.body.fontFamily};
  font-size: ${({ theme }) => theme.typography.body.fontSize};
  font-weight: ${({ theme }) => theme.typography.body.fontWeight};
`

export const Caption = styled(motion.p)`
  ${color};
  font-family: ${({ theme }) => theme.typography.caption.fontFamily};
  font-size: ${({ theme }) => theme.typography.caption.fontSize};
  font-weight: ${({ theme }) => theme.typography.caption.fontWeight};
`

export const Subtitle = styled(motion.h5)`
  ${color};
  font-family: ${({ theme }) => theme.typography.subtitle.fontFamily};
  font-size: ${({ theme }) => theme.typography.subtitle.fontSize};
  font-weight: ${({ theme }) => theme.typography.subtitle.fontWeight};
`

export const Text = styled(motion.span)`
  ${color};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.fontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeight};
`
