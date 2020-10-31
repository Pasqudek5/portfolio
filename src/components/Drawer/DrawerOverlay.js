import React from "react"
import styled from 'styled-components';
import { motion } from "framer-motion"

const OverlayWrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`

const OverlayLine = styled(motion.span)`
  display: block;
  width: 100%;
  height: calc(100vh / 4);
  background: #000;
`

const DrawerOverlay = () => {
  const stiffness = 1000

  const variants = {
    open: {
      x: 0,
      transition: {
        x: { stiffness }
      }
    },
    closed: {
      x: `-100%`,
      transition: {
        x: { stiffness }
      }
    }
  };

  return (
    <OverlayWrapper>
      <OverlayLine variants={variants} />
      <OverlayLine variants={variants} />
      <OverlayLine variants={variants} />
      <OverlayLine variants={variants} />
    </OverlayWrapper>
  )
}

export default DrawerOverlay
