import React from 'react'
import styled from 'styled-components'

const FooterStyle = styled.footer`
  color: salmon;
  &:hover {
    text-decoration: underline;
  }
`

const Footer = () => {
  return <FooterStyle>Footer</FooterStyle>
}

export default Footer
