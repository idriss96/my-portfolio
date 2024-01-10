'use client';

import './navBar.scss';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight } from '../../utils/motion.js';

function NavBar() {
  return (
    <motion.div initial="hidden" animate="visible" className="navbar">
      <div className="wrapper">
        <motion.span variants={slideInFromLeft(0.5)}>Idriss Dev</motion.span>

        <motion.div variants={slideInFromRight(0.5)} className="social">
          <a href="">
            <img src="/github.svg" alt="github icon" />
          </a>
          <a href="">
            <img src="/linkedin.svg" alt="linkedin icon" />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default NavBar;
