import { useState } from 'react';
import { motion } from 'framer-motion';
import Links from './links/Links';
import ToggleButton from './toggleButton/ToggleButton';
import { animatedSidebar, animatedSidebarMobile } from '../../utils/motion.js';
import './sidebar.scss';

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [isMobile] = useState(window.matchMedia('(max-width: 738px)').matches);

  return (
    <motion.div className="sidebar" animate={open ? 'open' : 'closed'}>
      <motion.div
        className="bg"
        variants={isMobile ? animatedSidebarMobile : animatedSidebar}
      >
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
