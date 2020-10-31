import React from 'react'
import { motion, useCycle } from 'framer-motion'
import styled from 'styled-components';

import Logo from 'components/Logo'
import Drawer from 'components/Drawer'

import MenuToggle from './MenuToggle'

const Header = styled(motion.header)`
  padding: ${({ theme }) => theme.spacing.md};
  z-index: ${({ theme }) => theme.zIndex.drawer};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Nav = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <>
      <Header initial={false} animate={isOpen ? 'open' : 'closed'}>
        <Logo />
        <MenuToggle toggle={toggleOpen} />
      </Header>
      <Drawer animate={isOpen ? 'open' : 'closed'} toggle={toggleOpen} />
    </>
  )
}

export default Nav
