import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router';

const Footer = () => {
  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/" },
        { name: "Find Tutors", href: "/tutor-find" },
        { name: "Subjects", href: "/subjects" },
        { name: "Pricing", href: "/pricing" },
        { name: "About Us", href: "/about" },
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Safety Tips", href: "/safety" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "FAQ", href: "/faq" },
      ]
    },
    {
      title: "For Tutors",
      links: [
        { name: "Become a Tutor", href: "/register" },
        { name: "Tutor Resources", href: "/find-tutor" },
        { name: "Teaching Tools", href: "/" },
        { name: "Tutor Community", href: "/" },
      ]
    }
  ];

  return (
    <footer className="bg-base-300 text-base-content">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-primary">Language Master</span>
            </div>
            <p className="mb-4">Connecting students with expert tutors for personalized learning experiences.</p>
            
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-primary mr-2" />
                <span>123 Education St, Learnville</span>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-primary mr-2" />
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-primary mr-2" />
                <span>support@lM.com</span>
              </div>
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to get updates on new tutors and learning resources.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="input input-bordered w-full max-w-xs rounded-r-none" 
              />
              <Link to={"/login"}>
              <button className="btn btn-primary rounded-l-none">
                Subscribe
              </button>
              </Link>
              
            </div>
          </motion.div>
        </div>

        <div className="border-t border-base-200 mt-12 pt-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p>© {new Date().getFullYear()} Langauge Master. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;