import { GatsbyNode } from "gatsby";
import * as xml2js from "xml2js";
import fetch from "isomorphic-fetch";

export const sourceNodes: GatsbyNode["sourceNodes"] = async ({
	actions,
	createNodeId,
	createContentDigest,
}) => {
	const { createNode } = actions;

	const req = await fetch(
		"https://bibliogram.cutelab.space/u/makixx_/rss.xml",
	);
	const xml = await req.text();
	const data: {
		rss: {
			channel: {
				item: {
					link: [string];
					description: [string];
				}[];
			}[];
		};
	} = await xml2js.parseStringPromise(xml);

	const images = data.rss.channel[0].item.map(item => {
		const idMatches = item.link[0].match(/\/p\/([^]+?$)/);
		const urlMatches = item.description[0].match(/<img src="(http[^]+?)"/);
		if (idMatches == null) throw new Error("Couldn't find id:" + item);
		if (urlMatches == null) throw new Error("Couldn't find url:" + item);
		return {
			imageId: idMatches[1],
			url: urlMatches[1],
			link: "https://www.instagram.com/p/" + idMatches[1],
		};
	});

	for (const image of images) {
		createNode({
			...image,
			id: createNodeId("InstagramImages-" + image.imageId),
			parent: null,
			children: [],
			internal: {
				type: "InstagramImages",
				content: JSON.stringify(image),
				contentDigest: createContentDigest(image),
			},
		});
	}

	return;
};
