import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import styled, { useTheme } from "styled-components"

const Button = styled(motion.button)`
  padding: ${({ theme }) => theme.spacing.sm};
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: 0;
  border: 0;
  cursor: pointer;
`

const Svg = styled(motion.svg)`
  width: 2.4rem;
  height: 2.4rem;
`

const Path = styled(motion.path)`
  fill: transparent;
  stroke-width: 3;
  stroke-linecap: round;
`

export const MenuToggle = ({ toggleMenu }) => {
  const theme = useTheme()

  return (
    <Button onClick={() => toggleMenu()}>
      <Svg
        variants={{
          open: {
            stroke: theme.colors.secondary.text,
            transition: {
              delay: 0.2,
            }
          },
          closed: { stroke: theme.colors.primary.text }
        }}
        viewBox="0 0 23 23"
      >
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" }
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" }
          }}
        />
      </Svg>
    </Button>
  );
}

MenuToggle.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
}

export default MenuToggle
