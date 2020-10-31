import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components';
import { motion } from 'framer-motion'
import { Link } from 'gatsby'

const Item = styled(motion.li)`
  font-size: ${({ theme }) => theme.typography.nav.fontSize};
  font-weight: ${({ theme }) => theme.typography.nav.fontWeight};
  font-family: ${({ theme }) => theme.typography.nav.fontFamily};
  margin: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.secondary.text};
  opacity: 0.3;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  text-align: center;
`

const DrawerLink = motion.custom(styled(Link)`
  font-size: inherit;
  font-weight: inherit;
  font-family: inherit;
  color: inherit;
  display: block;
  height: 100%;
  text-decoration: none;
`)

const DrawerItem = ({ to, toggleOpen, children }) => {
  const stiffness = 1000

  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness }
      }
    }
  };

  const whileHover = {
    x: 10,
    opacity: 1,
    transition: {
      x: { stiffness }
    }
  }

  return (
    <Item whileHover={whileHover}>
      <DrawerLink
        variants={variants}
        to={to}
        onClick={() => toggleOpen()}
      >
        {children}
      </DrawerLink>
    </Item>
  )
}

DrawerItem.propTypes = {
  toggleOpen: PropTypes.func.isRequired,
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default DrawerItem
