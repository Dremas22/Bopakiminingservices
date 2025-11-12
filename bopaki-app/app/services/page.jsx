"use client";

import { motion } from "framer-motion";

const coreServices = [
  {
    name: "Buy & Sell",
    images: [
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2126&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    ],
    description:
      "Complete equipment procurement and sales solutions for mining operations.",
  },
  {
    name: "Catering Services",
    images: [
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2087&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=2080&auto=format&fit=crop",
    ],
    description:
      "Professional catering services for mining sites and industrial facilities.",
  },
  {
    name: "PPE & Corporate Clothing",
    images: [
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=2070&auto=format&fit=crop",
    ],
    description:
      "High-quality personal protective equipment and corporate uniforms.",
  },
  {
    name: "Signage",
    images: [
      "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=2074&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=2070&auto=format&fit=crop",
    ],
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
    images: [
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop",
    ],
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

const secondaryServices = [
  {
    name: "Logistics",
    images: [
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop",
    ],
    description:
      "Efficient logistics and transportation services for mining operations.",
  },
  {
    name: "Plant Hire",
    images: [
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop",
    ],
    description: "Heavy machinery and equipment rental services.",
  },
  {
    name: "Office Space Hire",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop",
    ],
    description:
      "Flexible office space solutions for temporary and permanent needs.",
  },
];

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ scale: 1.05 }}
    viewport={{ once: true }}
    className="bg-accent rounded-2xl shadow-lg overflow-hidden h-96 flex flex-col"
  >
    <div className="h-48 overflow-hidden">
      <div className="flex h-full">
        {service.images.map((image, imgIndex) => (
          <div
            key={imgIndex}
            className="flex-1 bg-cover bg-center"
            style={{ backgroundImage: `url('${image}')` }}
          />
        ))}
      </div>
    </div>
    <div className="p-6 flex-1 flex flex-col overflow-hidden">
      <h3 className="text-xl font-bold text-foreground mb-3">{service.name}</h3>
      <div className="flex-1 overflow-y-auto">
        <p className="text-muted-foreground leading-relaxed">
          {service.description}
        </p>
      </div>
    </div>
  </motion.div>
);

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Banner Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('/images/BopakiminingLogo.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 text-center text-foreground px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-foreground"
          >
            Comprehensive solutions for the mining and industrial sectors
          </motion.p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Core Services
            </h2>
            <p className="text-lg text-foreground/30 max-w-3xl mx-auto">
              Our comprehensive range of core services designed to meet all your
              mining and industrial needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {coreServices.map((service, index) => (
              <ServiceCard key={service.name} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Secondary Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Additional Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Extended services to support your operational efficiency and
              business growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {secondaryServices.map((service, index) => (
              <ServiceCard key={service.name} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
