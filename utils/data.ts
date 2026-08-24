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
} from "@tabler/icons-react";
import { StepsProps } from "@/components/GetSuppportSteps/Steps";

export const STEPSDATA: StepsProps[] = [
  {
    id: "1",

    title: "Create Your Campaign",
    description:
      "Define your need (e.g., electricity bill, new phone), set a clear goal, and tell your story.",
  },
  {
    id: "2",
    title: "Share with Your Network",
    description:
      "Easily share your campaign link on social media, with friends, family, or within your Support Circles.",
  },
  {
    id: "3",
    title:
      "Funds go to where It’s Needed",
    description:
      "Watch contributions come in and know your money goes directly to your bill, fees, or need — never as unverified cash.",
  },
];
export const BUSINESSSTEPSDATA: StepsProps[] =
  [
    {
      id: "1",

      title: "List Your Offerings",
      description:
        "Create your business profile and easily list your products or services on SupportBuy.",
    },
    {
      id: "2",
      title:
        "Customers Either ‘Buy Now’ or Create Campaigns",
      description:
        "Users purchase immediately or use your product or service as the goal for their fundraising campaign",
    },
    {
      id: "3",
      title: "Get Paid Securely",
      description:
        "Once the campaign goal is met, funds are held securely and released to your wallet upon confirmed delivery — fast, safe, and dispute-free.",
    },
  ];

export const HowSupportBuyempowersyou =
  [
    {
      id: 1,
      title: "Get Help, Not Handouts",
      description:
        "Create purposeful campaigns for specific needs, turning requests into clear goals.",

      icon: Icon123,
    },
    {
      id: 2,
      title:
        "Share Your Story, Seamlessly",
      description:
        "Share campaigns with your network with ease, reaching those who care most.",

      icon: IconShare,
    },
    {
      id: 3,
      title:
        "Track Progress, Build Trust",
      description:
        "See contributions in real-time and ensure funds directly address your needs.",

      icon: IconChartDots2,
    },
    {
      id: 4,
      title:
        "SupportCircle: Fund Together",
      description:
        "Create invite-only groups to pool support for weddings, baby showers, or shared goals — together.",

      icon: IconUsersGroup,
    },
    {
      id: 5,
      title: "Stay Connected",
      description:
        "Follow live campaigns, cheer on your community, and never miss a moment that matters.",

      icon: IconMessages,
    },
    {
      id: 6,
      title:
        "Verified Once, Trusted Always",
      description:
        "Every campaign you create is backed by verified proof, ensuring your supporters always trust and stand by you.",

      icon: IconLock,
    },
  ];
export const TurnICantAffortItIntoSalesData =
  [
    {
      id: 1,
      title:
        "Get Help, Guaranteed Payments",
      description:
        "Receive direct payment for your products/services once campaign goals are met.",

      icon: IconCash,
    },
    {
      id: 2,
      title: "Expand Customer Base",
      description:
        "Get discovered through campaigns your customers create and share — turning their need into your reach.",

      icon: IconUsersGroup,
    },
    {
      id: 3,
      title: "Boost Sales & Visibility",
      description:
        "Every campaign created for your product is free marketing — visible to a whole new audience of contributors.",

      icon: IconTags,
    },
    {
      id: 4,
      title: "Build Customer Loyalty",
      description:
        "Be the business that showed up when your customer's community needed you to.",

      icon: IconHeartHandshake,
    },
  ];
