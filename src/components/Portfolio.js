import React from 'react';
import { motion } from 'framer-motion';
import styles from './Portfolio.module.css';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Aura "Hatred"',
      description: 'Uses explicit contrast to the color red. The aura has a walk and idle animation. Used in "Elemental Forge"',
      tags: ['VFX', 'Aura', 'Animation'],
      image: 'https://i.ibb.co/r2F88G0S/image.png',
      link: 'https://youtu.be/FsRAMIQGW4s?si=EshZAHheq7GLGe_D&t=15'
    },
    {
      id: 2,
      title: 'Aura "Duality"',
      description: 'Fluid character idle and special VFX. Used in "Elemental Forge"',
      tags: ['Animation', 'Aura'],
      image: 'https://i.ibb.co/vCJrTJHZ/image.png',
      link: 'https://youtu.be/FsRAMIQGW4s?si=cOk3kQeOnpS7iWFa&t=4'
    },
    {
      id: 3,
      title: 'Aura "Dancer"',
      description: 'Breakdance idle animation together with a disco-esque color theme. Used in "Elemental Forge"',
      tags: ['VFX', 'Aura', 'Animation'],
      image: 'https://i.ibb.co/rG4tV6XV/image.png',
      link: 'https://youtu.be/FsRAMIQGW4s?si=FyGVQ3S_hNDjgH6I&t=29'
    },
    {
      id: 4,
      title: 'TD Tower VFX',
      description: 'Attack beams, damaged towers FX and general particles.',
      tags: ['VFX', 'Particles', 'Attacks'],
      image: 'https://i.ibb.co/Kp72nKbt/image.png',
      link: 'https://youtu.be/_oiZ8L1Ma2o'
    },
   {
      id: 5,
      title: 'TD Unit VFX',
      description: 'Attacks and general particles.',
      tags: ['VFX', 'Particles', 'Attacks'],
      image: 'https://i.ibb.co/DgSv3zmc/image.png',
      link: 'https://youtu.be/_oiZ8L1Ma2o'
    },
   {
      id: 6,
      title: 'TD Unit Trails',
      description: 'Custom trails for units',
      tags: ['VFX', 'Trails'],
      image: 'https://i.ibb.co/LDghvvxQ/image.png',
      link: 'https://youtu.be/ncP24o4eyZM'
    },
    {
      id: 7,
      title: 'Combat FX and Anims',
      description: 'Clean VFX and trails that follow player fists, along animation that was used for a project including choppy animation',
      tags: ['VFX', 'Animations', 'Choppy'],
      image: 'https://i.ibb.co/yns2dNTn/image.png',
      link: 'https://youtu.be/kOhxsiKaF4w'
    },
    {
      id: 8,
      title: 'Collect VFX',
      description: 'Emitters that spew currency or add impact to an interaction.',
      tags: ['VFX', 'Currency', 'Trails', 'Impact'],
      image: 'https://i.ibb.co/TqPkXX8V/image.png',
      link: 'https://youtu.be/ZKZfR6qrXMs'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>My Portfolio</h2>
          <p className={styles.subtitle}>
            A collection of my best Roblox VFX and animation work
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={styles.card}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.imageContainer}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.image}
                />
                <div className={styles.overlay}>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.viewButton}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                  </motion.a>
                </div>
              </div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDescription}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;

