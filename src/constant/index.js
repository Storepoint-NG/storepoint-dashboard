import { home_icon } from "../../public/assets";

export const sidebarItems = [
  { title: "Dashboard", icon: home_icon },
  { title: "Orders", icon: home_icon },
  { title: "Products", icon: home_icon },
  { title: "Categories", icon: home_icon },
  { title: "Collections", icon: home_icon },
  { title: "Settings", icon: home_icon },
  { title: "Reports", icon: home_icon },
];

export const signup_details = [
  {
    type: "text",
    label: "First Name and Last Name",
    placeholder: "Type your firstname and lastname",
    name: "name",
  },
  {
    type: "text",
    label: "Phone Number",
    placeholder: "8164475065",
    name: "number",
  },
  {
    type: "text",
    label: "Your Business Email",
    placeholder: "Type your email address",
    name: "email",
  },
  {
    type: "password",
    label: "Password",
    isPassword: true,
    placeholder: "Enter a strong password",
    name: "password",
  },
  {
    type: "password",
    label: "Confirm Password",
    isPassword: true,
    placeholder: "Enter password again",
    name: "confirmPassword",
  },
];

export const dash_cards = [
  {
    title: "Add Produdct",
    desc: "Showcase your products with great descriptions. The more detailed you are the better.",
    linkText: "Add more Product",
    icon: "",
  },
  {
    title: "Publish",
    desc: "Our easy-to-follow guide will walk you through every step from domain mapping to publishing",
    linkText: "View store",
    icon: "",
  },
  {
    title: "Payment",
    desc: "Integrate with the best payment gateways to collect payments online.",
    linkText: "Configure Payments",
    icon: "",
  },
  {
    title: "Store Information",
    desc: "Fill in your store's basic information to get started.",
    linkText: "Edit Shop Profile",
    icon: "",
  },
  {
    title: "Template",
    desc: "How about a classy image slider or a fun background video?",
    linkText: "Browse Template",
    icon: "",
  },
  {
    title: "Logistics",
    desc: "Configure your rates delivery times according to your location",
    linkText: "Configure Logistics",
    icon: "",
  },
];
