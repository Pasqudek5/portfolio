import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components';
import { motion } from 'framer-motion'

const List = styled(motion.ul)`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
`

const DrawerList = ({ children }) => {
  const staggerChildren = 0.09;

  const variants = {
    open: {
      transition: { staggerChildren }
    },
    closed: {
      transition: {
        staggerChildren,
        when: 'afterChildren',
      }
    }
  };

  return (
    <List variants={variants}>
      {children}
    </List>
  )
}

DrawerList.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DrawerList
