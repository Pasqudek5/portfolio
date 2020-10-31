import React from "react"
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion'

import Arrow from './Arrow'

const StyledButton = styled(motion.button)`
  font-size: ${({ theme }) => theme.typography.button.fontSize};
  font-weight: ${({ theme }) => theme.typography.button.fontWeight};
  font-family: ${({ theme }) => theme.typography.button.fontFamily};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  position: relative;
  border: 0;
  outline: 0;
  border-radius: 5rem;
  height: 5rem;
  text-transform: uppercase;
  cursor: pointer;
  
  color: ${({ theme }) => theme.colors.button.primary};
  stroke: ${({ theme }) => theme.colors.button.primary};
  
  ${({ secondary }) => secondary && css`
    color: ${({ theme }) => theme.colors.button.secondary};
    stroke: ${({ theme }) => theme.colors.button.secondary};
  `};
`

const ButtonOverlay = styled(motion.span)`
  top: 0;
  left: 0;
  position: absolute;
  display: block;
  width: 5rem;
  height: 5rem;
  z-index: -1;
  border-radius: 5rem;
  background-color: ${({ theme }) => theme.colors.button.background};
`

const Button = ({ secondary = false, children }) => {
  const stiffness = 1;

  const variants = {
    rest: {
      width: '5rem',
      transition: {
        width: { stiffness }
      }
    },
    hover: {
      width: '100%',
      transition: {
        width: { stiffness }
      }
    }
  }

  return (
    <StyledButton secondary={secondary} whileHover="hover" animate="rest">
      <ButtonOverlay variants={variants} />
      {children}
      <Arrow />
    </StyledButton>
  )
}

Button.propTypes = {
  secondary: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Button
