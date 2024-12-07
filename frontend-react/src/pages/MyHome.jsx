// MyHome.jsx
import  { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
   FaYinYang, FaHeart, FaSpa
  , FaChevronDown, 
  FaInstagram, FaFacebookF, FaTwitter 
} from 'react-icons/fa';
import { GiMeditation, GiLotusFlower, GiHerbsBundle } from 'react-icons/gi';
import { BiLeaf } from 'react-icons/bi';
import './MyHome.css';
import Chatbot from '../components/Chatbot';

const MyHome = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    },
    exit: { opacity: 0 }
  };

  const features = [
    {
      icon: <GiMeditation />,
      title: "Mindful Meditation",
      description: "Ancient techniques for inner peace and mental clarity"
    },
    {
      icon: <FaYinYang />,
      title: "Dosha Balance",
      description: "Personalized wellness plans based on your constitution"
    },
    {
      icon: <GiHerbsBundle />,
      title: "Sacred Herbs",
      description: "Pure, organic herbs for natural healing"
    },
    {
      icon: <FaSpa />,
      title: "Therapeutic Spa",
      description: "Traditional Ayurvedic spa treatments"
    },
    {
      icon: <BiLeaf />,
      title: "Natural Remedies",
      description: "Time-tested healing formulations"
    },
    {
      icon: <FaHeart />,
      title: "Holistic Health",
      description: "Complete mind, body, and spirit wellness"
    }
  ];

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div 
          className="loader"
          exit={{ opacity: 0 }}
          key="loader"
        >
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <GiLotusFlower className="loader-icon" />
          </motion.div>
          <motion.h2
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Digital Vedic Ayurveda
          </motion.h2>
        </motion.div>
      ) : (
        <motion.div
          className="main-container"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {/* Navigation */}
          <nav className={`navbar ${scrollY > 50 ? 'scrolled' : ''}`}>
  <div className="nav-logo">
    <GiLotusFlower className="logo-icon" />
    <span>Digital Vedic Ayurveda</span>
  </div>
  <div className="nav-links">
    <a href="/">Home</a>
    <a href="/login">Login</a>
    <a href="/register">Register</a>
    <motion.button 
      className="nav-cta"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Book Consultation
    </motion.button>
  </div>
</nav>

          {/* Hero Section */}
          <section className="hero" id="home">
            <div className="hero-overlay"></div>
            <motion.div 
              className="hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1>
                Experience True
                <span className="highlight"> Ayurvedic</span>
                <span className="block">Healing & Wellness</span>
              </h1>
              <p>Embark on a transformative journey of holistic healing with ancient Vedic wisdom</p>
              <div className="hero-cta">
                <motion.button 
                  className="primary-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Journey
                </motion.button>
                <motion.button 
                  className="secondary-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </div>
              <motion.div 
                className="scroll-indicator"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FaChevronDown />
                <span>Explore More</span>
              </motion.div>
            </motion.div>
          </section>

          {/* Features Section */}
          <section className="features" id="features">
            <motion.div 
              className="features-content"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2>Our Holistic Approach</h2>
              <p className="section-subtitle">
                Discover the perfect balance of ancient wisdom and modern wellness
              </p>
              <div className="features-grid">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="feature-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="feature-icon">{feature.icon}</div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Footer */}
          <footer className="footer">
            <div className="footer-content">
              <div className="footer-info">
                <GiLotusFlower className="footer-logo" />
                <h3>Digital Vedic Ayurveda</h3>
                <p>Ancient wisdom for modern wellness</p>
              </div>
              <div className="social-links">
                <motion.a href="#" whileHover={{ scale: 1.2 }}><FaInstagram /></motion.a>
                <motion.a href="#" whileHover={{ scale: 1.2 }}><FaFacebookF /></motion.a>
                <motion.a href="#" whileHover={{ scale: 1.2 }}><FaTwitter /></motion.a>
              </div>
            </div>
          </footer>
        </motion.div>
      )}

      <Chatbot />
    </AnimatePresence>
    
  );
};

export default MyHome;
