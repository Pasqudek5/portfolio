import React from "react"
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion'

import DrawerOverlay from './DrawerOverlay'
import DrawerList from './DrawerList'
import DrawerItem from './DrawerItem'

const DrawerWrapper = styled(motion.nav)`
  z-index: ${({ theme }) => theme.zIndex.drawer};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`

const routes = [
  { to: '#home', label: 'home' },
  { to: '#about', label: 'about' },
  { to: '#works', label: 'works' },
  { to: '#contact', label: 'contact' },
]

const Drawer = ({ toggleMenu, animate }) => {
  const staggerChildren = 0.09;

  const variants = {
    open: {
      display: 'block',
      transition: { staggerChildren }
    },
    closed: {
      display: 'none',
      transition: {
        staggerChildren,
        when: 'afterChildren',
      }
    }
  };

  return (
    <DrawerWrapper initial={false} animate={animate} variants={variants} >
      <DrawerOverlay />
      <DrawerList>
        {routes.map(({ to, label }) => (
          <DrawerItem key={to} to={to} toggleMenu={toggleMenu}>{label}</DrawerItem>
        ))}
      </DrawerList>
    </DrawerWrapper>
  )
}

Drawer.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  animate: PropTypes.oneOf(['open', 'closed'])
}

export default Drawer
