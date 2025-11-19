"use client";
import { contactInfo } from "@/constants";
import { motion } from "framer-motion";
import { HomeIcon, Loader2, LocateIcon } from "lucide-react";
import { useState } from "react";
import { FaAddressBook, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+27",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
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
        phone: (() => {
          if (!formData.phone) return "Phone is required.";
          if (!/^[1-9][0-9]{8}$/.test(formData.phone))
            return "Phone must be 9 digits and cannot start with 0.";
          return "";
        })(),
        message: formData.message ? "" : "Message is required.",
      };

      setErrors(newErrors);

      const hasErrors = Object.values(newErrors).some((msg) => msg !== "");
      if (hasErrors) return;

      // Construct full phone number
      const { countryCode, phone, ...rest } = formData;
      const fullPhoneNumber = `${countryCode}${phone}`;

      // Data to log
      const data = {
        ...rest,
        phone: fullPhoneNumber,
      };

      // Professional WhatsApp message
      const fullMessage = `Hello,

My name is ${formData.name}.
Phone: ${fullPhoneNumber}
Email: ${formData.email}

Message:
${formData.message}

Looking forward to your response.
Thank you.`;

      const encodedMessage = encodeURIComponent(fullMessage);

      // WhatsApp number (recipient)
      const whatsAppNumber = "+27832121460";

      // Open WhatsApp
      window.open(
        `https://wa.me/${whatsAppNumber}?text=${encodedMessage}`,
        "_blank"
      );

      // // Logging
      // console.log("Form submitted successfully:", data);
      // console.log("Encoded message:", encodedMessage);

      // Reset form
      setFormData({
        name: "",
        email: "",
        countryCode: "+27",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="pt-16">
      {/** BANNER */}
      <div className="relative h-96 w-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 text-center text-foreground px-4 w-full min-w-0">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-5xl font-bold mb-4 wrap-break-word"
          >
            Contact Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-foreground/30 wrap-break-word"
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
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
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
                    transition={{ duration: 0.3, delay: index * 0.1 }}
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
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
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
                      type="text"
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
                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-foreground/20 mb-2">
                    Phone Number *
                  </label>
                  <div className="flex space-x-2">
                    {/* Country Code Dropdown */}
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    >
                      <option value="+27">+27</option>
                      {/* Add more codes here if needed */}
                    </select>

                    {/* Phone Number Input */}
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => {
                        // Allow only digits, max 9, first digit != 0
                        const value = e.target.value;
                        if (/^[1-9][0-9]{0,8}$/.test(value) || value === "") {
                          handleChange(e);
                        }
                      }}
                      className={`flex-1 px-4 py-3 border ${
                        errors.phone ? "border-red-500" : "border-border"
                      } rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors`}
                      placeholder="Phone number (9 digits)"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
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
                  className="flex items-center justify-center gap-4 w-full bg-linear-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg"
                >
                  {submitting ? (
                    <div className="flex items-center justify-center gap-4">
                      <Loader2 className="w-6 h-6 rounded-full animate-spin text-accent-foreground text-center" />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <>
                      <FaWhatsapp className="text-green-500 w-6 h-6 rounded-full hover:text-green-600" />
                      <span>Send via WhatsApp</span>
                    </>
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
            transition={{ duration: 0.3 }}
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
            transition={{ duration: 0.3, delay: 0.2 }}
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
                  <div className="max-w-xs mx-auto text-muted-foreground space-y-8">
                    <div className="flex flex-col gap-2">
                      {/* Street */}
                      <div className="flex items-center gap-4">
                        <span className="w-6 flex justify-center text-orange-500 font-semibold text-lg">
                          <HomeIcon className="w-10 h-10" />
                        </span>
                        <span className="font-medium">House No. 0462</span>
                      </div>

                      {/* Section */}
                      <div className="flex items-center gap-4">
                        <span className="w-6 flex justify-center text-orange-500 font-semibold text-lg">
                          <LocateIcon />
                        </span>
                        <span className="font-medium">Mmadiphiri Section</span>
                      </div>

                      {/* City & Postal */}
                      <div className="flex items-center gap-4">
                        <span className="w-6 flex justify-center text-orange-500 font-semibold text-lg">
                          <FaAddressBook />
                        </span>
                        <span className="font-medium">Phokeng 0335</span>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="w-96 h-0.5 bg-orange-500 rounded-full mx-auto mt-2"></div>
                  </div>
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
