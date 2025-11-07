import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import { ThemeProvider } from 'next-themes';

const InterSans = Inter({
	subsets: ['latin'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'SuportBuy | Get financial support fast,transparent & social',
	description:
		'SupportBuy makes it easy for you to raise funds for daily needs, from bills to shopping, with the power of your community.',
	icons: {
		icon: [
			{ url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
			{ url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
			{ url: '/favicon.ico', sizes: '48x48 32x32 16x16', type: 'image/x-icon' },
		],
		apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${InterSans.className} antialiased relative `}>
				<ThemeProvider attribute='class' enableSystem defaultTheme='system'>
					<Providers>{children}</Providers>
				</ThemeProvider>
			</body>
		</html>
	);
}
