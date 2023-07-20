import { iconOnline, iconBudgeting, iconOnboarding, iconApi, imgCurrency, imgRestaurant, imgPlane, imgConfetti } from "../assets";

export const features = [
  {
    id: "feature-1",
    icon: iconOnline,
    title: "Online Banking",
    content:
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    id: "feature-2",
    icon: iconBudgeting,
    title: "Simple Budgeting",
    content:
      "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
  },
  {
    id: "feature-3",
    icon: iconOnboarding,
    title: "Fast Onboarding",
    content:
      "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
   {
    id: "feature-4",
    icon: iconApi,
    title: "Open API",
    content:
      "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];

export const articles = [
  {
    id: "article-1",
    content:
      "The world is getting smaller and we’re becoming more mobile. So why should you be   forced to only receive money in a single …",
    author: "By Claire Robinson",
    title: "Receive money in any currency with no fees",
    img: imgCurrency,
    alt: "Currency"
  },
  {
    id: "article-2",
    content:
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
    author: "By Wilson Hutton",
    title: "Treat yourself without worrying about money",
    img: imgRestaurant,
    alt: "Restaurant"
  },
  {
    id: "article-3",
    content:
      "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
    author: "By Wilson Hutton",
    title: "Take your Easybank card wherever you go",
    img: imgPlane,
    alt: "Plane"
  },
  {
    id: "article-4",
    content:
      "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
    author: "By Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    img: imgConfetti,
    alt: "Confetti"
  },
];
