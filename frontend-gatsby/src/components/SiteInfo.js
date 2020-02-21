import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

const SiteInfoWreapper = styled.div`
	flex-grow: 1;
	color: white;
	margin: auto 0;
`

const SiteTitle = styled.div`font-weight: bold;`

const SiteInfo = () => {
	return (
		<StaticQuery
			query={graphql`
				{
					allWordpressSiteMetadata {
						edges {
							node {
								name
								description
							}
						}
					}
				}
			`}
			render={(props) => (
				<SiteInfoWreapper>
					<SiteTitle>
						{props.allWordpressSiteMetadata.edges[0].node.name}
					</SiteTitle>
					<div>{props.allWordpressSiteMetadata.edges[0].node.description}</div>
				</SiteInfoWreapper>
			)}
		/>
	)
}

export default SiteInfo
