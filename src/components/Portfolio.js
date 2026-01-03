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
      image: 'https://cdn.discordapp.com/attachments/1329091508535558308/1440457618480042135/image.png?ex=691e3a32&is=691ce8b2&hm=fbdb4d6ace9835586a158034998877a77fcf5890e5f66671c9956f46bfcfe95c&',
      link: 'https://youtu.be/FsRAMIQGW4s?si=EshZAHheq7GLGe_D&t=15'
    },
    {
      id: 2,
      title: 'Aura "Duality"',
      description: 'Fluid character idle and special VFX. Used in "Elemental Forge"',
      tags: ['Animation', 'Aura'],
      image: 'https://cdn.discordapp.com/attachments/1329091508535558308/1440457914169950289/image.png?ex=691e3a79&is=691ce8f9&hm=de2a9755f5ef90fb49390294d71f1078650c1d3b3852577f0866f02a52bbf983&',
      link: 'https://youtu.be/FsRAMIQGW4s?si=cOk3kQeOnpS7iWFa&t=4'
    },
    {
      id: 3,
      title: 'Aura "Dancer"',
      description: 'Breakdance idle animation together with a disco-esque color theme. Used in "Elemental Forge"',
      tags: ['VFX', 'Aura', 'Animation'],
      image: 'https://cdn.discordapp.com/attachments/1329091508535558308/1440457404109291520/image.png?ex=691e39ff&is=691ce87f&hm=7f1a050682062742d5eade78e4804d69cb6389928e8a536d92eb28d6e54cbd6c&',
      link: 'https://youtu.be/FsRAMIQGW4s?si=FyGVQ3S_hNDjgH6I&t=29'
    },
    {
      id: 4,
      title: 'TD Tower VFX',
      description: 'Attack beams, damaged towers FX and general particles.',
      tags: ['VFX', 'Particles', 'Attacks'],
      image: 'https://cdn.discordapp.com/attachments/1329091508535558308/1440457401504632842/image.png?ex=691e39fe&is=691ce87e&hm=4b3175b7298af8b66df8e9e614653f305c5b890c487a060ad40cc3a40c00721e&',
      link: 'https://youtu.be/_oiZ8L1Ma2o'
    },
   {
      id: 5,
      title: 'TD Unit VFX',
      description: 'Attacks and general particles.',
      tags: ['VFX', 'Particles', 'Attacks'],
      image: 'https://cdn.discordapp.com/attachments/1329091508535558308/1440457401873727509/image.png?ex=691e39ff&is=691ce87f&hm=d81b8cddfc09128ff7442d0df759f3a0ebce0b5714f5ada297b66f725edf2311&',
      link: 'https://youtu.be/_oiZ8L1Ma2o'
    },
   {
      id: 6,
      title: 'TD Unit Trails',
      description: 'Custom trails for units',
      tags: ['VFX', 'Trails'],
      image: 'https://cdn.discordapp.com/attachments/1329091508535558308/1440466257596907711/image.png?ex=691e423e&is=691cf0be&hm=871d66f971bffa067ac451f61d6e0cad426f65072d7d996452c7e9e0e578e837&',
      link: 'https://youtu.be/ncP24o4eyZM'
    },
    {
      id: 7,
      title: 'Combat FX and Anims',
      description: 'Clean VFX and trails that follow player fists, along animation that was used for a project including choppy animation',
      tags: ['VFX', 'Animations', 'Choppy'],
      image: 'https://cdn.discordapp.com/attachments/1329091508535558308/1440460150149484544/image.png?ex=691e3c8e&is=691ceb0e&hm=48b33c228ff95349ce8c823164a6eeb11d47ba843ee18ef44fb2c21626578821&',
      link: 'https://youtu.be/kOhxsiKaF4w'
    },
    {
      id: 8,
      title: 'Collect VFX',
      description: 'Emitters that spew currency or add impact to an interaction.',
      tags: ['VFX', 'Currency', 'Trails', 'Impact'],
      image: 'https://cdn.discordapp.com/attachments/1329091508535558308/1440459138881814619/image.png?ex=691e3b9d&is=691cea1d&hm=1ca8449140aa6989f57480e549b214eb38e7c5cb0f44b87c830aa3640a85a2d8&',
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

