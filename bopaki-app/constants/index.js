import { FiBriefcase, FiShoppingCart, FiTool, FiTruck } from "react-icons/fi";

export const pages = [
  {
    id: "home",
    title: "Home - Bopaki Mining Services (Pty) Ltd",
    description:
      "Bopaki Mining Services (Pty) Ltd is a 100% black woman-owned enterprise providing services and solutions to the mining and engineering sectors. Founded by Ms. Keikanetswe Teme, the company continues to redefine excellence in traditionally male-dominated industries.",
    href: "/",
  },

  {
    id: "services",
    title: "Services - Bopaki Mining Services",
    description:
      "Bopaki Mining Services (Pty) Ltd provides a wide range of professional services and solutions to the mining and engineering sectors. We are committed to efficiency, reliability, and professionalism, ensuring cost-effective and high-quality support to our clients.",
    href: "/services",
  },
  {
    id: "contact",
    title: "Contact Us - Bopaki Mining Services",
    description:
      "Reach out to Bopaki Mining Services via email or phone, or visit our office at House No. 0462, Mmadiphiri Section, Phokeng 0335. Email: info@bopakimining.co.za | keikanetswe@gmail.co.za | Phone: +27 83 212 1460.",
    href: "/contact",
  },
];

export const services = [
  { id: 1, title: "Buy & Sell", icon: FiShoppingCart },
  { id: 2, title: "Catering Services", icon: FiBriefcase },
  { id: 3, title: "PPE & Corporate Clothing", icon: FiTool },
  { id: 4, title: "Signage", icon: FiTool },
  { id: 5, title: "Fire Protection Equipment", icon: FiTool },
  { id: 6, title: "Fuel & Lubricants", icon: FiTruck },
  { id: 7, title: "Industrial Gearboxes", icon: FiTool },
  { id: 8, title: "Logistics", icon: FiTruck },
  { id: 9, title: "Plant Hire", icon: FiBriefcase },
  { id: 10, title: "Office Space Hire", icon: FiBriefcase },
];
