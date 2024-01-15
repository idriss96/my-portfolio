import { motion } from 'framer-motion';
import {
  slideInFromLeft,
  slideInFromRight,
  scrollButton,
} from '../../../utils/motion';

function HeroContent() {
  return (
    <motion.div initial="hidden" animate="visible" className="hero-content">
      <div className="content">
        <motion.div variants={slideInFromLeft(0.5)} className="title">
          <p>
            Providing <span> the best </span> project experience
          </p>
        </motion.div>

        <motion.p variants={slideInFromLeft(0.8)} className="text">
          Hello there! I&apos;m Idriss Atik, a junior front-end web developer on
          a journey to bring creativity and functionality to the digital world.
          With a passion for crafting visually appealing and user-friendly
          interfaces, I&apos;m excited to share my evolving portfolio with you.
        </motion.p>
        <div className="buttons">
          <motion.button className="work-btn" variants={slideInFromLeft(1)}>
            See the Latest Work
          </motion.button>
          <motion.button
            className="contact-btn"
            variants={slideInFromLeft(0.9)}
          >
            Contact Me
          </motion.button>
        </div>
        <motion.div variants={slideInFromLeft(2.5)} className="scorll-icon">
          <motion.img
            animate={scrollButton}
            src="/scroll.png"
            alt="scrol icon"
            className="scorll-icon"
          />
        </motion.div>
      </div>

      <motion.div variants={slideInFromRight(0.8)} className="image-content">
        <img src="/mainIconsdark.svg" alt="work icons" />
      </motion.div>
    </motion.div>
  );
}

export default HeroContent;
