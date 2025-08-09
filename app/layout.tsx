import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import MobileFooter from './components/shared/MobileFooter';

const InterSans = Inter({
	weight: '400',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'SuportBuy | Get financial support fast,transparent & social',
	description:
		'SupportBuy makes it easy for you to raise funds for daily needs, from bills to shopping, with the power of your community.',
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
