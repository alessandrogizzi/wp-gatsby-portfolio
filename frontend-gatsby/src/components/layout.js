import React from 'react'
import MainMenu from './MainMenu'
import Helmet from 'react-helmet'
import { graphql, StaticQuery, Link } from 'gatsby'
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
		<StaticQuery
			query={graphql`
				{
					allWordpressWpFavicon {
						edges {
							node {
								url {
									source_url
								}
							}
						}
					}
				}
			`}
			render={(props) => (
				<Helmet>
					<link
						rel='icon'
						href={props.allWordpressWpFavicon.edges[0].node.url.source_url}
					/>
				</Helmet>
			)}
		/>
		<MainMenu />
		<GlobalStyle />
		<LayoutWrapper>{children}</LayoutWrapper>
	</div>
)

export default Layout
