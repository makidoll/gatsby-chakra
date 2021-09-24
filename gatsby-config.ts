import { GatsbyConfig } from "gatsby";

export const pathPrefix: GatsbyConfig["pathPrefix"] = "/gatsby-chakra";

export const siteMetadata: GatsbyConfig["siteMetadata"] = {
	title: "Maki",
	description: "My cute personal website",
	siteUrl: "https://makitsune.github.io/gatsby-chakra",
};

export const plugins: GatsbyConfig["plugins"] = [
	"gatsby-plugin-react-helmet",
	"gatsby-plugin-image",
	{
		resolve: "gatsby-source-filesystem",
		options: {
			name: "images",
			path: "./src/images",
		},
	},
	"gatsby-transformer-sharp",
	"gatsby-plugin-sharp",
	// {
	// 	resolve: "gatsby-plugin-manifest",
	// 	options: {
	// 		name: "gatsby-starter-default",
	// 		short_name: "starter",
	// 		start_url: "/",
	// 		background_color: "#663399",
	// 		// This will impact how browsers show your PWA/website
	// 		// https://css-tricks.com/meta-theme-color-and-trickery/
	// 		// theme_color: "#663399",
	// 		display: "minimal-ui",
	// 		icon: "./src/images/gatsby-icon.png", // This path is relative to the root of the site.
	// 	},
	// },
	// this (optional) plugin enables Progressive Web App + Offline functionality
	// To learn more, visit: https://gatsby.dev/offline
	// "gatsby-plugin-offline",
	{
		resolve: "gatsby-plugin-layout",
		options: {
			component: require.resolve("./src/components/layout.tsx"),
		},
	},
	"gatsby-plugin-sass",
	{
		resolve: "gatsby-plugin-remote-images",
		options: {
			nodeType: "InstagramImages",
			imagePath: "url",
		},
	},
];
