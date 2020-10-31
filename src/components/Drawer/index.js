import React from "react"
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion'

import OverlayLines from './OverlayLines'
import DrawerList from './DrawerList'
import DrawerItem from './DrawerItem'

const DrawerWrapper = styled(motion.nav)`
  z-index: ${({ theme }) => theme.zIndex.appBar};
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

const Drawer = ({ toggleOpen, animate }) => {
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
      <OverlayLines />
      <DrawerList>
        {routes.map(({ to, label }) => (
          <DrawerItem key={to} to={to} toggleOpen={toggleOpen}>{label}</DrawerItem>
        ))}
      </DrawerList>
    </DrawerWrapper>
  )
}

Drawer.propTypes = {
  toggleOpen: PropTypes.func.isRequired,
  animate: PropTypes.oneOf(['open', 'closed'])
}

export default Drawer
