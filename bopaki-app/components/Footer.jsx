import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebookF />, name: "Facebook", href: "#" },
    { icon: <FaTwitter />, name: "Twitter", href: "#" },
    { icon: <FaLinkedinIn />, name: "LinkedIn", href: "#" },
    { icon: <FaInstagram />, name: "Instagram", href: "#" },
  ];

  return (
    <footer className="bg-[#004aad] text-white pt-12">
      <div className="container mx-auto px-6 md:px-20 grid md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-[#ff9900]">Bopaki Mining</h3>
          <p className="text-gray-200 leading-relaxed">
            A 100% black woman-owned company providing professional mining and
            engineering solutions with integrity, reliability, and excellence.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold text-[#ff9900] mb-4">
            Contact Us
          </h4>
          <ul className="space-y-3 text-gray-100">
            <li className="flex items-start space-x-3">
              <FaMapMarkerAlt className="text-[#ff9900] mt-1" />
              <span>
                House no 0462 Mmadiphiri Section <br />
                Phokeng 0335
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <FaEnvelope className="text-[#ff9900]" />
              <a
                href="mailto:info@bopakimining.co.za"
                className="hover:text-[#ff9900] transition-colors"
              >
                info@bopakimining.co.za
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <FaEnvelope className="text-[#ff9900]" />
              <a
                href="mailto:keikanetswe@gmail.com"
                className="hover:text-[#ff9900] transition-colors"
              >
                keikanetswe@gmail.com
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <FaPhoneAlt className="text-[#ff9900]" />
              <a
                href="tel:+27832121460"
                className="hover:text-[#ff9900] transition-colors"
              >
                +27 83 212 1460
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div>
          <h4 className="text-xl font-semibold text-[#ff9900] mb-4">
            Follow Us
          </h4>
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-12 h-12 flex items-center justify-center bg-white text-[#004aad] rounded-full shadow-lg hover:bg-[#ff9900] hover:text-white transform hover:scale-110 transition-all"
                aria-label={social.name}
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p className="mt-3 text-gray-200 text-sm">
            Stay connected with us on social media for updates and insights.
          </p>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-12 border-t border-white/20 py-6 text-center text-sm text-gray-300 font-bold">
        © {new Date().getFullYear()} Bopaki Mining Services (Pty) Ltd. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
