import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Frontend_skill, Backend_skill, Other_skill } from '../../constants';
import { slideInFromLeft } from '../../utils/motion';
import SkillDataProvider from './skillDataProvider/SkillDataProvider';
import './skills.scss';
const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <div className="skill-container">
      <motion.div initial="hidden" animate="visible" className="skill-content">
        <motion.p
          ref={ref}
          animate={inView ? 'visible' : 'hidden'}
          variants={slideInFromLeft(0.5)}
          className="skills-title"
        >
          Front-End
        </motion.p>
        <div className="skill-icons">
          {Frontend_skill.map((item, index) => (
            <SkillDataProvider
              key={index}
              src={item.Image}
              index={index}
              title={item.skill_name}
            />
          ))}
        </div>

        <motion.p
          ref={ref}
          animate={inView ? 'visible' : 'hidden'}
          variants={slideInFromLeft(0.7)}
          className="skills-title"
        >
          Back-End
        </motion.p>

        <div className="skill-icons">
          {Backend_skill.map((item, index) => (
            <SkillDataProvider key={index} src={item.Image} index={index} title={item.skill_name} />
          ))}
        </div>

        <motion.p
          ref={ref}
          animate={inView ? 'visible' : 'hidden'}
          variants={slideInFromLeft(0.9)}
          className="skills-title"
        >
          Others
        </motion.p>

        <div className="skill-icons">
          {Other_skill.map((item, index) => (
            <SkillDataProvider key={index} src={item.Image} index={index} title={item.skill_name}/>
          ))}
        </div>

        <div className="skill-background">
          <div className="skill-background-container">
            <video
              className="skill-video"
              preload="false"
              playsInline
              loop
              muted
              autoPlay
              src="/cards-video.webm"
            ></video>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
