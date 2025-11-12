"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="pt-16">
      {/* Banner Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/BopakiminingLogo.jpg"
          alt="Bopaki Mining Services Banner"
          fill
          className="object-cover object-center opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-black/40"></div>

        {/* Banner content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-primary drop-shadow-lg"
          >
            Bopaki Mining Services (Pty) Ltd
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl mb-8 text-foreground/20 leading-relaxed"
          >
            Empowering mining and engineering through innovation and excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="/services"
              className="inline-block bg-primary text-background font-semibold px-8 py-4 rounded-full shadow-lg hover:brightness-110 transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Who Are We Section */}
      <section className="py-20 bg-background-alt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Who Are We?
            </h2>
            <p className="text-lg text-foreground max-w-4xl mx-auto leading-relaxed">
              <span className="font-semibold text-foreground">
                Bopaki Mining Services (Pty) Ltd
              </span>{" "}
              is a dynamic and innovative company established to provide
              comprehensive mining and engineering solutions. Founded by Ms.
              Keikanetswe Teme, our company is built on the principles of
              excellence, innovation, and unwavering commitment to client
              satisfaction. We specialize in delivering world-class services
              across various sectors of the mining and industrial landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What We Do
            </h2>
            <p className="text-lg text-foreground max-w-4xl mx-auto leading-relaxed">
              At Bopaki Mining Services, we pride ourselves on operational
              efficiency, professionalism, and exceptional after-sales support.
              Our comprehensive service portfolio spans from equipment supply
              and maintenance to specialized consulting services. We work
              closely with our clients to understand their unique challenges and
              deliver tailored solutions that drive productivity and ensure
              sustainable operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-background-alt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-foreground rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-foreground/20 mb-4">
              Vision
            </h3>
            <p className="text-foreground/40 leading-relaxed">
              Promote and maintain a reputation of service excellence and
              dedication, resulting in long-term partnerships with our clients
              and suppliers.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-foreground rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-foreground/20 mb-4">
              Mission
            </h3>
            <ul className="list-disc ml-6 text-foreground/40 space-y-2 leading-relaxed">
              <li>
                Serve clients with prompt response — because downtime destroys
                income.
              </li>
              <li>
                Be a locally and internationally recognized enterprise providing
                first-class services.
              </li>
              <li>
                Create a sustainable, world-class company that benefits all
                stakeholders.
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Our Leadership
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-surface rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-linear-to-r from-primary/80 to-secondary/80 h-32"></div>
              <div className="relative px-8 py-12">
                <div className="w-24 h-24 bg-card rounded-full mx-auto -mt-20 mb-6 border-4 border-surface flex items-center justify-center">
                  <span className="text-2xl font-bold text-foreground">KT</span>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Ms. Keikanetswe Teme
                  </h3>
                  <p className="text-primary font-semibold mb-4">Director</p>
                  <p className="text-foreground leading-relaxed">
                    With a Master's degree in Business Administration, Ms. Teme
                    brings strategic vision and operational excellence to Bopaki
                    Mining Services. Her educational background and industry
                    expertise provide the company with a competitive edge in
                    navigating the complex mining and engineering landscape.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
