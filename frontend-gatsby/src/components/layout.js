import React from 'react'
import MainMenu from './MainMenu'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0 !important;
    padding: 0 !important;
  }
`

const LayoutWrapper = styled.div`
	max-width: 960px;
	margin: 0 auto;
`

const Layout = ({ children }) => (
	<div>
		<MainMenu />
		<GlobalStyle />
		<LayoutWrapper>{children}</LayoutWrapper>
	</div>
)

export default Layout
