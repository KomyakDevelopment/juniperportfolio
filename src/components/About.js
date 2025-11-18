import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';

const About = () => {
  const skills = [
    { name: 'VFX Design', level: 95 },
    { name: 'Animation', level: 90 },
    { name: 'Particle Systems', level: 88 },
    { name: 'UI/UX Animation', level: 85 },
    { name: 'Performance Optimization', level: 92 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>About Me</h2>
          <p className={styles.subtitle}>Passionate about creating stunning visual experiences</p>
        </motion.div>

        <div className={styles.content}>
          <motion.div
            className={styles.textContent}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.bio}>
              <p>
                I'm a dedicated Roblox developer specializing in visual effects and animations.
                With years of experience in the platform, I've mastered the art of creating
                immersive and captivating visual experiences that enhance gameplay and storytelling.
              </p>
              <p>
                My work focuses on pushing the boundaries of what's possible in Roblox, combining
                technical expertise with creative vision to deliver stunning VFX and smooth animations
                that perform flawlessly across all devices.
              </p>
              <p>
                Whether it's epic spell effects, fluid character animations, or atmospheric
                environmental VFX, I bring passion and precision to every project.
              </p>
            </div>

            <motion.div
              className={styles.skills}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              <h3 className={styles.skillsTitle}>Skills & Expertise</h3>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className={styles.skillItem}
                  variants={itemVariants}
                >
                  <div className={styles.skillHeader}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={styles.skillPercent}>{skill.level}%</span>
                  </div>
                  <div className={styles.skillBar}>
                    <motion.div
                      className={styles.skillProgress}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.visualContent}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.avatarContainer}>
              <div className={styles.avatar}>
                <div className={styles.avatarGlow} />
                <div className={styles.avatarPlaceholder}>
                  <span>JD</span>
                </div>
              </div>
              <motion.div
                className={styles.floatingElements}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              >
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className={styles.floatingElement}
                    style={{
                      '--angle': `${i * 60}deg`,
                      '--delay': `${i * 0.2}s`
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

