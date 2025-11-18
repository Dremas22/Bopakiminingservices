import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { FiBriefcase, FiShoppingCart, FiTool, FiTruck } from "react-icons/fi";

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
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

export const coreServices = [
  {
    name: "Buy & Sell",
    images: ["/images/buy&sell16.jpeg", "/images/buy&sell2.jpeg"],
    description:
      "Complete equipment procurement and sales solutions for mining operations.",
  },
  {
    name: "Catering Services",
    images: [
      "/images/catering-services3.jpeg",
      "/images/catering-services2.jpeg",
    ],
    description:
      "Professional catering services for mining sites and industrial facilities.",
  },
  {
    name: "PPE & Corporate Clothing",
    images: [
      "/images/ppe&corporate-clothing3.jpeg",
      "/images/ppe&corporate-clothing4.jpeg",
    ],
    description:
      "High-quality personal protective equipment and corporate uniforms.",
  },
  {
    name: "Signage",
    images: ["/images/signage1.jpeg", "/images/signage2.jpeg"],
    description:
      "Custom industrial and safety signage solutions for all facilities.",
  },
  {
    name: "Fire Protection Equipment",
    images: [
      "https://images.unsplash.com/photo-1551731409-43eb3e517a1a?q=80&w=2012&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=2070&auto=format&fit=crop",
    ],
    description:
      "Comprehensive fire safety equipment and maintenance services.",
  },
  {
    name: "Fuel Lubricants",
    images: ["/images/fuel-lubricants1.jpeg", "/images/fuel-lubricants2.jpeg"],
    description:
      "High-grade fuel and lubricant supply for industrial machinery.",
  },
  {
    name: "Industrial Gearboxes",
    images: [
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2070&auto=format&fit=crop",
    ],
    description:
      "Precision gearboxes and transmission solutions for heavy industry.",
  },
];

export const secondaryServices = [
  {
    name: "Logistics",
    images: ["/images/logistics3.jpeg", "/images/logistics4.jpeg"],
    description:
      "Efficient logistics and transportation services for mining operations.",
  },
  {
    name: "Plant Hire",
    images: ["/images/plant-hire1.jpeg", "/images/plant-hire2.jpeg"],
    description: "Heavy machinery and equipment rental services.",
  },
  {
    name: "Office Space Hire",
    images: [
      "/images/office-space-hire1.jpeg",
      "/images/office-space-hire2.jpeg",
    ],
    description:
      "Flexible office space solutions for temporary and permanent needs.",
  },
];

export const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    title: "Address",
    details: [
      "House no 0462 Mmadiphiri Section",
      "Phokeng 0335",
      "South Africa",
    ],
    color: "text-orange-500",
  },
  {
    icon: FaEnvelope,
    title: "Email",
    details: ["info@bopakimining.co.za", "keikanetswe@gmail.co.za"],
    color: "text-blue-500",
  },
  {
    icon: FaPhone,
    title: "Phone",
    details: ["+27 83 212 1460"],
    color: "text-green-500",
  },
  {
    icon: FaClock,
    title: "Business Hours",
    details: [
      "Monday - Friday: 8:00 AM - 5:00 PM",
      "Saturday: 9:00 AM - 1:00 PM",
      "Sunday: Closed",
    ],
    color: "text-purple-500",
  },
];
