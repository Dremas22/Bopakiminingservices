"use client";
import { contactInfo } from "@/constants";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Validation
      const newErrors = {
        name: formData.name ? "" : "Full name is required.",
        email: formData.email
          ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
            ? ""
            : "Enter a valid email address."
          : "Email is required.",
        subject: formData.subject ? "" : "Subject is required.",
        message: formData.message ? "" : "Message is required.",
      };

      setErrors(newErrors);

      const hasErrors = Object.values(newErrors).some((msg) => msg !== "");
      if (hasErrors) return;

      await new Promise((resolve) => setTimeout(resolve, 2000));

      // All inputs valid — proceed
      console.log("Form submitted successfully:", formData);
      alert("Form submitted successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="pt-16">
      {/* Banner Section */}
      <div className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop')",
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
            Contact Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-foreground/30"
          >
            Get in touch with our team for all your mining and industrial needs
          </motion.p>
        </div>
      </div>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="shadow-lg p-8"
            >
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Get In Touch
              </h2>
              <p className="text-lg text-foreground/30 mb-8 leading-relaxed">
                We're here to help you with all your mining and industrial
                service needs. Reach out to us through any of the following
                channels, and our team will respond promptly to assist you.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div
                      className={`w-12 h-12 ${info.color} bg-card-foreground dark:bg-card rounded-lg flex items-center justify-center shrink-0`}
                    >
                      <info.icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {info.title}
                      </h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-foreground/30">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-background/20 rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Send Us A Message
              </h2>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-foreground/20 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${
                        errors.name ? "border-red-500" : "border-border"
                      } rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-foreground/20 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${
                        errors.email ? "border-red-500" : "border-border"
                      } rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-foreground/20 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${
                      errors.subject ? "border-red-500" : "border-border"
                    } rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors`}
                    placeholder="What is this regarding?"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-foreground/20 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${
                      errors.message ? "border-red-500" : "border-border"
                    } rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none`}
                    placeholder="Please provide details about your inquiry..."
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-linear-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg"
                >
                  {submitting ? (
                    <div className="flex items-center justify-center gap-4">
                      <Loader2 className="w-6 h-6 rounded-full animate-spin text-accent-foreground text-center" />
                      <span>Submitting...</span>
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-background/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Find Us</h2>
            <p className="text-lg text-foreground/20">
              Located in the heart of Phokeng, we're easily accessible for all
              your service needs
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-background/20 rounded-2xl shadow-lg overflow-hidden h-96"
          >
            <div className="w-full h-full bg-card flex items-center justify-center shadow-lg">
              <div className="text-center text-foreground/80 space-y-3">
                <div className="flex flex-col items-center justify-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-orange-100 dark:bg-orange-500/10 mb-3">
                    <FaMapMarkerAlt
                      size={28}
                      className="text-orange-500 dark:text-orange-400"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    Address
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xs mx-auto">
                    House No. 0462, Mmadiphiri Section, <br />
                    Phokeng 0335
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default ContactPage;
