import React from "react"
import styled from 'styled-components';
import { motion } from 'framer-motion'

const ArrowWrapper = styled(motion.span)`
  margin-left: ${({ theme }) => theme.spacing.md};
  display: flex;
  place-items: center;
`

const ArrowSvg = styled.svg`
  fill: transparent;
  width: 2rem;
`

const Arrow = () => {

  const variants = {
    rest: {
      x: 0,
    },
    hover: {
      x: 5,
    }
  }

  return (
    <ArrowWrapper variants={variants} transition={{ stiffness: 200 }}>
      <ArrowSvg viewBox="0 0 21 8">
        <path d="M20.3536 4.35355C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464466C16.9763 0.269204 16.6597 0.269204 16.4645 0.464466C16.2692 0.659728 16.2692 0.976311 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53553C16.6597 7.7308 16.9763 7.7308 17.1716 7.53553L20.3536 4.35355ZM0 4.5H20V3.5H0V4.5Z"/>
      </ArrowSvg>
    </ArrowWrapper>
  )
}

export default Arrow
