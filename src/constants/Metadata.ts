import { siteMetadata } from "@/lib/siteMetaData";
import type { Metadata } from "next";

export const METADATA: Metadata = {
	title: siteMetadata.title,
	description: siteMetadata.description,
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	keywords: siteMetadata.keywords,
	manifest: siteMetadata.manifest,
	alternates: {
		canonical: siteMetadata.siteUrl,
	},
	icons: [
		{
			rel: "icon",
			type: "image/png",
			sizes: "32x32",
			url: "/favicon/favicon-32x32.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "16x16",
			url: "/favicon/favicon-16x16.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "192x192",
			url: "/favicon/android-icon-192x192.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "96x96",
			url: "/favicon/favicon-96x96.png",
		},
		{
			rel: "apple-touch-icon",
			sizes: "57x57",
			url: "/favicon/apple-icon-57x57.png",
		},
		{
			rel: "apple-touch-icon",
			sizes: "60x60",
			url: "/favicon/apple-icon-60x60.png",
		},
		{
			rel: "apple-touch-icon",
			sizes: "72x72",
			url: "/favicon/apple-icon-72x72.png",
		},
		{
			rel: "apple-touch-icon",
			sizes: "76x76",
			url: "/favicon/apple-icon-76x76.png",
		},
		{
			rel: "apple-touch-icon",
			sizes: "114x114",
			url: "/favicon/apple-icon-114x114.png",
		},
		{
			rel: "apple-touch-icon",
			sizes: "120x120",
			url: "/favicon/apple-icon-120x120.png",
		},
		{
			rel: "apple-touch-icon",
			sizes: "144x144",
			url: "/favicon/apple-icon-144x144.png",
		},
		{
			rel: "apple-touch-icon",
			sizes: "152x152",
			url: "/favicon/apple-icon-152x152.png",
		},
		{
			rel: "apple-touch-icon",
			sizes: "180x180",
			url: "/favicon/apple-icon-180x180.png",
		},
	],

	openGraph: {
		title: siteMetadata.title,
		description: siteMetadata.description,
		siteName: "Portfolio - Faiz Khan",
		url: siteMetadata.siteUrl,
		images: [
			{
				url: "/opengraph-image.png",
				width: 1200,
				height: 630,
			},
		],
		type: "website",
		locale: "en_US",
		countryName: "IN",
		emails: ["faizpathan1717@gmail.com"],
		phoneNumbers: ["+917802844364"],
		ttl: 60,
	},
	twitter: {
		title: siteMetadata.title,
		description: siteMetadata.description,
		card: "summary_large_image",
		creator: "@unfaized__",
		creatorId: "10267032498603556917",
		images: [
			{
				url: "/opengraph-image.png",
				width: 1200,
				height: 630,
			},
		],
		site: siteMetadata.siteUrl,
	},
	category: "Personal",
	other: {
		url: siteMetadata.siteUrl,
	},
	publisher: "Faiz Khan",
	creator: "Faiz Khan",
};

export const JSON_LD = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Faiz Khan",
	url: siteMetadata.siteUrl,
	image: `${siteMetadata.siteUrl}/opengraph-image.png`,
	description:
		"Portfolio of Faiz Khan, a software engineer and freelancer with expertise in various technologies and a passion for creating innovative solutions.",
	jobTitle: "Software Engineer",
	worksFor: {
		"@type": "Organization",
		name: "Freelance",
	},
	address: {
		"@type": "PostalAddress",
		addressLocality: "India",
		addressCountry: "IN",
	},
	contactPoint: {
		"@type": "ContactPoint",
		telephone: "+917802844364",
		contactType: "Customer Service",
		availableLanguage: "English",
		areaServed: "Worldwide",
	},
	sameAs: [
		"https://www.linkedin.com/in/fzkhan19",
		"https://twitter.com/unfaized__",
		"https://www.instagram.com/unfaized__",
	],
	hasOccupation: {
		"@type": "Occupation",
		name: "Software Engineer",
		description:
			"Develops and maintains software applications, specializing in web development and innovative solutions.",
	},
};
