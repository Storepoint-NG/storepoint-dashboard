import {
  HomeOutlined,
  SettingFilled,
  SignalFilled,
  TagFilled,
} from "@ant-design/icons";

export const base_inputs = [
  { label: "Title", placeholder: "Product name", type: "text", name: "title" },
  {
    label: "Category",
    placeholder: "Product Type - Snack",
    type: "select",
    name: "category",
    options: [
      {
        value: "Accessories",
        label: "Accessories",
      },
      {
        value: "Baby products",
        label: "Baby products",
      },
      {
        value: "Computer",
        label: "Computer",
      },
      {
        value: "Fashion",
        label: "Fashion",
      },
      {
        value: "Food",
        label: "Food",
      },
      {
        value: "Grocery",
        label: "Grocery",
      },
      {
        value: "Health & Beauty",
        label: "Health & Beauty",
      },
      {
        value: "Home & Office",
        label: "Home & Office",
      },
      {
        value: "Phones & Tablets",
        label: "Phones & Tablets",
      },
    ],
  },
  {
    label: "Description",
    placeholder: "A brief description of the product...",
    type: "textarea",
    name: "description",
  },
];
export const details_inputs = [
  {
    label: "Price",
    placeholder: "Price per item",
    type: "text",
    name: "price",
  },
  {
    label: "Quantity",
    placeholder: "How many in stock",
    type: "number",
    name: "quantity",
  },
];

export const sidebarItems = [
  { title: "Home", icon: <HomeOutlined />, link: "" },
  { title: "Orders", icon: <TagFilled />, link: "orders" },
  { title: "Products", icon: <TagFilled />, link: "products" },
  { title: "Customers", icon: <TagFilled />, link: "custormers" },
  { title: "Reports", icon: <SignalFilled />, link: "reports" },
  { title: "Metris", icon: <SettingFilled />, link: "metrics" },
  { title: "Settings", icon: <SettingFilled />, link: "settings" },
];

export const create_store_inputs = [
  {
    name: "storeName",
    placeholder: "Enter your store name here",
    label: "Store Name",
  },
  {
    name: "phoneNumber",
    placeholder: "Enter your phone number here",
    label: "Phone Number",
  },
  { name: "location", placeholder: "E.g Yaba, Lagos", label: "Location" },
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
