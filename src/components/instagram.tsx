import { Grid, Link } from "@chakra-ui/layout";
import { graphql, StaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as React from "react";

function Instagram() {
	return (
		<StaticQuery
			query={graphql`
				query InstagramImageQuery {
					allInstagramImages(limit: 6) {
						nodes {
							link
							imageId
							localImage {
								childImageSharp {
									gatsbyImageData(
										width: 150
										placeholder: BLURRED
										formats: [AUTO, WEBP, AVIF]
									)
								}
							}
						}
					}
				}
			`}
			render={data => (
				<Grid templateColumns="repeat(3, 1fr)" gap={4}>
					{data.allInstagramImages.nodes.map(image => (
						<Link
							key={image.imageId}
							href={image.link}
							style={{ borderRadius: "8px" }}
						>
							<GatsbyImage
								style={{ borderRadius: "8px" }}
								image={getImage(image.localImage)}
								alt={image.imageId}
							/>
						</Link>
					))}
				</Grid>
			)}
		/>
	);
}

export default Instagram;
