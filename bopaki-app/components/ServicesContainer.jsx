"use client";

import { coreServices, secondaryServices } from "@/constants";
import { motion } from "framer-motion";

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
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

const ServicesContainer = () => {
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
};

export default ServicesContainer;
