import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
	title: "Coffee Fix",
	description:
		"A quick fix app to tell you what is wrong with your espresso based off of your last pull.",
	icons: {
		icon: "/coffee2.jpeg",
		apple: "/coffee2.jpeg",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz:wght@300&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body>
				{children}
				<Script
					async
					src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4910799776628880"
					crossOrigin="anonymous"
				/>
			</body>
		</html>
	);
}
