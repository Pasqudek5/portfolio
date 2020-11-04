import React from "react"
import styled from 'styled-components';

const Section = styled.section`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.primary.background};
  color: ${({ theme }) => theme.colors.primary.text};
`

const HeroSection = () => {
  return (
    <Section>
      some text here
    </Section>
  )
}

export default HeroSection
