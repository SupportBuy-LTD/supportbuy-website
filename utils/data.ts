import { Icon123, IconChartDots2, IconShare } from '@tabler/icons-react';
import { StepsProps } from '@/app/components/GetSuppportSteps/Steps';

export const STEPSDATA: StepsProps[] = [
	{
		id: '1',

		title: 'Create Your Campaign',
		description:
			'Define your need (e.g., electricity bill, new phone), set a clear goal, and tell your story.',
	},
	{
		id: '2',
		title: 'Share with Your Network',
		description:
			'Easily share your campaign link on social media, with friends, family, or within your Support Circles..',
	},
	{
		id: '3',
		title: 'Receive & Track Support',
		description:
			'Watch contributions come in, track your progress transparently, and directly pay for your needs in-app.',
	},
];
export const BUSINESSSTEPSDATA: StepsProps[] = [
	{
		id: '1',

		title: 'List Your Offerings',
		description:
			'Create your business profile and easily list your products or services on SupportBuy.',
	},
	{
		id: '2',
		title: 'Customers Either ‘Buy Now’ or Create Campaigns',
		description:
			'Users purchase immediately or use your product or service as the goal for their fundraising campaign',
	},
	{
		id: '3',
		title: 'Get Paid & Fulfill',
		description:
			'Once the campaign goal is met, you receive direct payment to your wallet, then fulfill the order.',
	},
];

export const HowSupportBuyempowersyou = [
	{
		id: 1,
		title: 'Get Help, Not Handouts',
		description:
			'Create purposeful campaigns for specific needs, turning requests into clear goals.',

		icon: Icon123,
	},
	{
		id: 2,
		title: 'Share Your Story, Seamlessly',
		description:
			'Share campaigns with your network with ease, reaching those who care most.',

		icon: IconShare,
	},
	{
		id: 3,
		title: 'Track Progress, Build Trust',
		description:
			'See contributions in real-time and ensure funds directly address your needs.',

		icon: IconChartDots2,
	},
];
