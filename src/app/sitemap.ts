import { allBlogs } from "contentlayer/generated";
import type { MetadataRoute } from "next";
import { siteMetadata } from "../lib/siteMetaData";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = siteMetadata.siteUrl;

	// Dynamic Blog URLs
	const blogUrls = allBlogs.map((blog) => ({
		url: `${baseUrl}/blogs/${blog.url}`,
		lastModified: blog.updatedAt
			? new Date(blog.updatedAt)
			: new Date(blog.publishedAt),
		priority: 0.64,
	}));

	// Static URLs
	const staticUrls = [
		{
			url: `${baseUrl}/`,
			lastModified: new Date(),
			priority: 1.0,
		},
		{
			url: `${baseUrl}/projects`,
			lastModified: new Date(),
			priority: 0.8,
		},
		{
			url: `${baseUrl}/blogs`,
			lastModified: new Date(),
			priority: 0.8,
		},
	];

	// Combine static and dynamic blog URLs
	return [...staticUrls, ...blogUrls];
}
