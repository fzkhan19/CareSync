import { Icons } from "@/components/icons";
import { siteMetadata } from "@/lib/siteMetaData";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const BLUR_FADE_DELAY = 0.2;

export const DATA = {
	name: "Faiz Khan",
	initials: "FK",
	url: siteMetadata.siteUrl,
	location: "Gujarat, India",
	locationLink: "https://www.google.com/maps/place/Surat+gujarat+india",
	description:
		"Fueled by coffee and a love for code, I’m a fullstack developer who turns caffeine into features. Always tinkering with the latest tech to bring ideas to life.",
	summary:
		"In 2024, I took my developer game up a notch by diving headfirst into fullstack development and product creation. From my MERN stack beginnings, I’ve expanded into React, Next.js, and Node.js, all while keeping my coffee addiction fueled. I’ve even launched a shiny new product called takeoff.com! When I’m not busy coding or hunting for the perfect coffee blend, I’m dreaming up my next big idea.",
	avatarUrl: "/me.webp",

	skills: [
		"React",
		"Next.js",
		"Typescript",
		"Node.js",
		"Python",
		"MongoDB",
		"TailwindCSS",
		"Express.js",
		"Machine Learning",
	],

	navbar: [
		{ href: "/", icon: HomeIcon, label: "Home" },
		{ href: "/blogs", icon: NotebookIcon, label: "Blog" },
	],

	contact: {
		email: "faizpathan1717@gmail.com",
		tel: "+917802844364",
		social: {
			GitHub: {
				name: "GitHub",
				url: "https://github.com/fzkhan19",
				icon: Icons.github,

				navbar: true,
			},
			LinkedIn: {
				name: "LinkedIn",
				url: "https://linkedin.com/in/fzkhan19",
				icon: Icons.linkedin,

				navbar: true,
			},
			X: {
				name: "X",
				url: "https://x.com/unfaized__",
				icon: Icons.x,

				navbar: true,
			},
			WhatsApp: {
				name: "WhatsApp",
				url: "https://api.whatsapp.com/send/?phone=917802844364&text=I+want+to+work+on+a+project+with+you&type=phone_number&app_absent=0",
				icon: Icons.whatsapp,
				navbar: false,
			},
			Email: {
				name: "Send Email",
				url: "mailto:faizpathan1717@gmail.com",
				icon: Icons.email,
				navbar: true,
			},
		},
	},

	work: [
		{
			company: "Brisktech",
			href: "https://briskteq.com/",
			badges: [],
			location: "Surat, Gujarat, India",
			title: "Associate Software Engineer",
			logoUrl:
				"https://briskteq.com/favicon-32x32.png?v=ed2d944e43d6f875da6fdd680bf7f7b9",
			start: "January 2023",
			end: "Present",
			description: `- **Snapchat Telecom Partner Portal**: Developed a MERN stack portal to improve real-time data sharing, resulting in a 40% increase in partner engagement and a 30% boost in decision-making efficiency.

- **Online Test Platform**: Built a mass applicant testing platform using Next.js and TypeScript, enhancing screening efficiency by 50% and reducing time-to-hire by 30%.

- **BeAssured - AI Reviews**: Integrated Elasticsearch with Langchain, Firebase, and MongoDB to enhance search functionality, leading to a 50% increase in user satisfaction and a 35% improvement in review relevance.
`,
		},
		{
			company: "Innovative Tuitions",
			badges: [],
			href: "",
			location: "Surat, Gujarat, India",
			title: "High School Tutor",
			logoUrl: "",
			start: "June 2019",
			end: "January 2023",
			description:
				"Tutored over 20 students in Math, Science, English, and Computer Science, helping them achieve significant academic improvements.",
		},
		{
			company: "DPI Rainbow Foundation",
			badges: [],
			href: "https://www.facebook.com/people/DPI-Rainbow-Foundation/100080646654438/",
			location: "Remote",
			title: "Web Developer Intern",
			logoUrl:
				"https://th.bing.com/th/id/OIP.9x7INbNMmybkHiSBVkIHMQHaEX?rs=1&pid=ImgDetMain",
			start: "June 2022",
			end: "July 2022",
			description:
				"Volunteered with an NGO to develop a cattle trading website using web technologies, enhancing service reach by 50% and boosting stakeholder satisfaction by 30%.",
		},
	],

	education: [
		{
			school: "Gujarat Technological University",
			href: "https://www.gtu.ac.in/",
			degree: "Bachelor of Technology (BTech) in Information Technology",
			logoUrl: "https://www.gtu.ac.in/assets/img/favicon.ico",
			start: "April 2020",
			end: "April 2023",
		},
		{
			school: "Gujarat Technological University",
			href: "https://www.gtu.ac.in/",
			degree: "Diploma in Information Technology",
			logoUrl: "https://www.gtu.ac.in/assets/img/favicon.ico",
			start: "2017",
			end: "2020",
		},
		{
			school: "Sir J.J. English Medium School",
			href: "#education",
			degree: "High School",
			logoUrl: "",
			start: "2005",
			end: "2017",
		},
	],

	projects: [
		{
			title: "TakeOff.com",
			href: "https://take-off.uk",
			dates: "November 2023 - Present",
			active: true,
			description:
				"A platform for booking airport taxis with easy scheduling, transparent pricing, real-time tracking, and 24/7 support.",
			technologies: [
				"Next.js",
				"TypeScript",
				"MongoDB",
				"TailwindCSS",
				"Stripe",
				"Clerk",
				"Google Cloud Platform",
				"Google Maps",
				"Vercel",
			],
			links: [
				{
					type: "Website",
					href: "https://take-off.uk",
					icon: <Icons.globe className="size-3" />,
				},
			],
			image: "",
			video: "",
		},
		{
			title: "Metis",
			href: "https://metis-chat.vercel.app/",
			dates: "July 2024 - July 2024",
			active: true,
			description:
				"AI chat application with context-aware responses, real-time streaming, and Redis integration for efficient data handling.",
			technologies: [
				"Next.js",
				"Vercel AI SDK",
				"TailwindCSS",
				"Redis",
				"Meta's Llama 3",
				"Upstash",
			],
			links: [
				{
					type: "Website",
					href: "https://metis-chat.vercel.app/",
					icon: <Icons.globe className="size-3" />,
				},
				{
					type: "Repository",
					href: "https://github.com/fzkhan19/metis",
					icon: <Icons.github className="size-3" />,
				},
			],
			image: "",
			video: "",
		},
		{
			title: "Landscaper",
			href: "https://landscaper-lime.vercel.app/",
			dates: "July 2024 - August 2024",
			active: true,
			description:
				"Website solution for landscaping businesses, featuring client management, and service showcase.",
			technologies: ["Next.js", "TypeScript", "TailwindCSS", "Email JS"],
			links: [
				{
					type: "Website",
					href: "https://landscaper-lime.vercel.app/",
					icon: <Icons.globe className="size-3" />,
				},
				{
					type: "Repository",
					href: "https://github.com/fzkhan19/landscaper",
					icon: <Icons.github className="size-3" />,
				},
			],
			image: "",
			video: "",
		},
		{
			title: "VoteIn",
			href: "https://vote-in.up.railway.app/",
			dates: "June 2024 - June 2024",
			active: true,
			description:
				"Real-time voting platform with live updates, utilizing Next.js and Socket.IO for dynamic user interactions.",
			technologies: ["Next.js", "Socket.IO", "Redis", "TypeScript", "Railway"],
			links: [
				{
					type: "Website",
					href: "https://vote-in.up.railway.app/",
					icon: <Icons.globe className="size-3" />,
				},
				{
					type: "Repository",
					href: "https://github.com/fzkhan19/votein",
					icon: <Icons.github className="size-3" />,
				},
			],
			image: "",
			video: "",
		},
		{
			title: "Google Review Scraper",
			href: "",
			dates: "November 2023 - November 2023",
			active: true,
			description:
				"Tool for scraping Google Maps reviews using Puppeteer, designed to gather and analyze customer feedback.",
			technologies: ["JavaScript", "Node.js", "Puppeteer"],
			links: [
				{
					type: "Repository",
					href: "https://github.com/fzkhan19/google-review-scraper",
					icon: <Icons.github className="size-3" />,
				},
			],
			image: "/google-scraper.jpg",
			video: "",
		},
		{
			title: "WebRTC1-1",
			href: "https://khan-webrtc.netlify.app",
			dates: "September 2023 - Present",
			active: true,
			description:
				"One-on-one video calling app using WebRTC and Firebase for real-time communication.",
			technologies: ["WebRTC", "Firebase", "JavaScript"],
			links: [
				{
					type: "Website",
					href: "https://khan-webrtc.netlify.app",
					icon: <Icons.globe className="size-3" />,
				},
				{
					type: "Repository",
					href: "https://github.com/fzkhan19/webrtc1-1",
					icon: <Icons.github className="size-3" />,
				},
			],
			image: "",
			video: "",
		},
		{
			title: "whack-a-mole",
			href: "https://moley-whack.netlify.app/",
			dates: "October 2023 - October 2023",
			active: true,
			description:
				"Fun React mini game with simple mechanics, developed in a short time-frame.",
			technologies: ["React", "TypeScript", "TailwindCSS"],
			links: [
				{
					type: "Website",
					href: "https://moley-whack.netlify.app/",
					icon: <Icons.globe className="size-3" />,
				},
				{
					type: "Repository",
					href: "https://github.com/fzkhan19/whack-a-mole",
					icon: <Icons.github className="size-3" />,
				},
			],
			image: "",
			video: "",
		},
	],

	lifeChangelog: [
		{
			year: "2024",
			events: [
				{
					heading: "Product Building Mastery 🏗️",
					description:
						"Diving deeper into the world of product building, SEO, marketing, performance tweaks, and content writing. Creating SaaS apps seems like my calling!",
				},
				{
					heading: "Freelancing Journey 🌟",
					description:
						"Currently on a quest to snag my first freelance client while leveling up my social media game. Watch this space for updates on my freelancing adventure!",
				},
				{
					heading: "Building and Learning 🚀",
					description:
						"Built Metis, an AI-powered web assistant using Vercel AI SDK.\nCreated a video calling app with WebRTC.\nLaunched Vot-In, a real-time thought-sharing platform using WebSocket and Redis.\nFrom AI interactions to video calls and instant messaging, it's been a year of diverse tech adventures!",
				},
				{
					heading: "Started Writing Blogs ✍️",
					description:
						"Embarked on a new journey of sharing knowledge through blogging. Exploring various tech topics and personal experiences to contribute to the developer community.",
				},
			],
		},
		{
			year: "2023",
			events: [
				{
					heading: "TAKE OFF.COM 🚀",
					description:
						"Built and launched TakeOFF.com (take-off.uk) for booking airport taxis.\nFrom product building to SEO and marketing, it's been a ride full of learning and growth!",
				},
				{
					heading: "Working with Snapchat 👻",
					description:
						"Got a huge opportunity to work with Snapchat as our client. It's been a wild ride, and I'm excited to see what comes next!",
				},
				{
					heading: "Web Dev Obsession 🔥",
					description:
						"Got hooked on web dev thanks to Primagen, Theo.gg, and Fireship on YouTube.\nMy knowledge expanded as I explored new domains with fiery passion.",
				},
				{
					heading: "Next.js Magic ✨",
					description:
						"Plunged headfirst into the mind-blowing, earth-shattering sorcery of Next.js 13 with its revolutionary app router.\nIt wasn't just a game-changer, it was a universe-altering revelation that left me utterly spellbound and questioning the very fabric of web development reality!\n(Yes, I love Next.Js that much😂)",
				},
				{
					heading: "AI/ML Fun 🧠",
					description:
						"Had a blast with AI/ML research, exploring LangChain and Python.\nWhich led me to explore FastAPI, Huggingface and various AI models",
				},
				{
					heading: "Internship Adventures 🛠️",
					description:
						"Joined Brisktech as an intern and immediately scored my first project with an international client from Mexico!\nJoined a team of 20+ devs to work on a super app, adding Here Maps and Material UI like a boss.",
				},
			],
		},
		{
			year: "2022",
			events: [
				{
					heading: "Tutoring Gig 🎓",
					description:
						"Took up tutoring to earn some extra cash and help students conquer their academic challenges. Knowledge is power, after all!",
				},
			],
		},
		{
			year: "2021",
			events: [
				{
					heading: "React Love 💙",
					description:
						"Fell head over heels for React. It’s a love story that turned into a full-blown obsession with all things frontend!",
				},
				{
					heading: "Internship Experience 🌍",
					description:
						"Interned with an NGO and TEN Foundation, working with React and WordPress.\nIt was a whirlwind adventure in the tech world!",
				},
			],
		},
		{
			year: "2020",
			events: [
				{
					heading: "University Life 🎓",
					description:
						"Started my Bachelor’s in Information Technology.\nUniversity life kicked off with new challenges and opportunities galore!",
				},
				{
					heading: "Web Dev Journey Begins 💻",
					description:
						"When COVID hit, I dived into web development.\nSpent countless hours coding in PHP and getting my tech groove on.",
				},
			],
		},
		{
			year: "2018",
			events: [
				{
					heading: "First Backlog 😂",
					description:
						"I consider this as an achievement. If you're a CS Engineer, you must have a back in Mathematics.",
				},
			],
		},
		{
			year: "2017",
			events: [
				{
					heading: "C Fanboy 🕹️",
					description:
						"Dived deep into C and C++—exploring software lifecycle, OS fundamentals, networking, cryptography, and DSA.\nEven coded simple CLI games in C Graphics to play during labs!",
				},
				{
					heading: "College Life Begins 🎓",
					description:
						"Embarked on a new chapter with a diploma in Information Technology. College life was just beginning to unfold!",
				},
				{
					heading: "Tech Tinkering Begins 🖥️",
					description:
						"Started learning C in school, which led to a passion for C++, C graphics, and more tech tinkering. My journey into coding began!",
				},
				{
					heading: "Medical Dreams Dashed 😔",
					description:
						"Had big dreams of entering the medical field, but financial hurdles redirected my path. Sometimes life has other plans!",
				},
				{
					heading: "10th Grade Success 🎉",
					description:
						"Completed 10th grade with a solid 86%—a major win at the time. Celebrate good grades!",
				},
			],
		},
		{
			year: "2010",
			events: [
				{
					heading: "Tech Tinkerer ⚙️",
					description:
						"My uncle’s new PC and dial-up connection ignited my love for tech and internet 🛜.\nGaming and tinkering became my new hobbies, sparking a lifelong passion.",
				},
			],
		},
		{
			year: "2004",
			events: [
				{
					heading: "Moved to Surat 🚚",
					description:
						"Relocated to Surat, Gujarat, from my hometown. A big move that marked the start of many new adventures.",
				},
			],
		},
		{
			year: "2001",
			events: [
				{
					heading: "Hello, World! 🌍",
					description: "An Engineer was Born in India 🍼",
				},
			],
		},
	],
};
