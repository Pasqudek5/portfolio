import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { motion } from 'framer-motion'

const TextWrapper = styled(motion.p)`
  display: flex;
`

const Letter = styled(motion.span)`
`

const AnimatedText = ({ children }) => {
  const containerVariants = {
    before: {},
    after: { transition: { staggerChildren: 0.06 } },
  }

  const letterVariants = {
    before: {
      y: 20,
      opacity: 0,
    },
    after: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <TextWrapper
      variants={containerVariants}
      initial="before"
      animate="after"
    >
      {children.split('').map((letter, index) => (
        <Letter
          key={ index }
          variants={ letterVariants }
        >
          {letter === ' ' ? '\u00A0' : letter}
        </Letter>
      ))}
    </TextWrapper>
  )
}

AnimatedText.propTypes = {
  children: PropTypes.string.isRequired
}

export default AnimatedText
