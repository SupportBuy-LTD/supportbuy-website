import {
	Icon123,
	IconCash,
	IconChartDots2,
	IconHeartHandshake,
	IconLock,
	IconMessages,
	IconShare,
	IconTags,
	IconUsersGroup,
} from '@tabler/icons-react';
import { StepsProps } from '@/components/GetSuppportSteps/Steps';

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
	{
		id: 4,
		title: 'Support & Fund Together',
		description:
			'Form private groups to collectively fund shared goals, strengthening bonds.',

		icon: IconUsersGroup,
	},
	{
		id: 5,
		title: 'Engage & Connect',
		description:
			'An embedded social feed for sharing updates, reacting, and building community.',

		icon: IconMessages,
	},
	{
		id: 6,
		title: 'Secure & Reliable',
		description:
			'Your transactions are safe, giving you peace of mind with every contribution.',

		icon: IconLock,
	},
];
export const TurnICantAffortItIntoSalesData = [
	{
		id: 1,
		title: 'Get Help, Guaranteed Payments',
		description:
			'Receive direct payment for your products/services once campaign goals are met..',

		icon: IconCash,
	},
	{
		id: 2,
		title: 'Expand Customer Base',
		description:
			'Reach a wider audience through social sharing and community funding.',

		icon: IconUsersGroup,
	},
	{
		id: 3,
		title: 'Boost Sales & Visibility',
		description:
			'Every campaign for your item acts as free marketing, driving interest.',

		icon: IconTags,
	},
	{
		id: 4,
		title: 'Build Customer Loyalty',
		description:
			'Help customers acquire your products, fostering goodwill and repeat business.',

		icon: IconHeartHandshake,
	},
];
