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
      image: 'https://cdn.discordapp.com/attachments/1329091508535558308/1457104269219205343/image.png?ex=695ac999&is=69597819&hm=de75578a7e2d95376e75e4779f6f664f41e013c67a8f0bf3f71afd4b90bc0db8&',
      link: 'https://youtu.be/FsRAMIQGW4s?si=EshZAHheq7GLGe_D&t=15'
    },
    {
      id: 2,
      title: 'Aura "Duality"',
      description: 'Fluid character idle and special VFX. Used in "Elemental Forge"',
      tags: ['VFX', 'Animation', 'Aura'],
      image: 'https://cdn.discordapp.com/attachments/1329091508535558308/1457104268871073832/image.png?ex=695ac999&is=69597819&hm=8a7baa3825769f4089fb740ea1df2da6daa2d0fac32fa233a4341e7ad465d5c3&',
      link: 'https://youtu.be/FsRAMIQGW4s?si=cOk3kQeOnpS7iWFa&t=4'
    },
    {
      id: 3,
      title: 'Aura "Dancer"',
      description: 'Breakdance idle animation together with a disco-esque color theme. Used in "Elemental Forge"',
      tags: ['VFX', 'Aura', 'Animation'],
      image: 'https://media.discordapp.net/attachments/1329091508535558308/1457103992244011048/image.png?ex=695ac957&is=695977d7&hm=45d3ed5a199026c13b5415592321de3e2e7b55da9f85a9295e533139c2c65bc4&=&format=webp&quality=lossless',
      link: 'https://youtu.be/FsRAMIQGW4s?si=FyGVQ3S_hNDjgH6I&t=29'
    },
    {
      id: 4,
      title: 'TD Tower VFX',
      description: 'Attack beams, damaged towers FX and general particles.',
      tags: ['VFX', 'Particles', 'Attacks'],
      image: 'https://media.discordapp.net/attachments/1329091508535558308/1457103992596201472/image.png?ex=695ac957&is=695977d7&hm=47af58632e23bd46bb08e9b6a0a58b6c5674c8c5dfb188c65636519aa262c0bb&=&format=webp&quality=lossless',
      link: 'https://youtu.be/_oiZ8L1Ma2o'
    },
   {
      id: 5,
      title: 'TD Unit VFX',
      description: 'Attacks and general particles.',
      tags: ['VFX', 'Particles', 'Attacks'],
      image: 'https://media.discordapp.net/attachments/1329091508535558308/1457103992990470187/image.png?ex=695ac957&is=695977d7&hm=bcfac746462b30823f19cf468ebd235ec166b98b3ad0dca0e81ff85a55da4359&=&format=webp&quality=lossless',
      link: 'https://youtu.be/_oiZ8L1Ma2o'
    },
   {
      id: 6,
      title: 'TD Unit Trails',
      description: 'Custom trails for units',
      tags: ['VFX', 'Trails'],
      image: 'https://media.discordapp.net/attachments/1329091508535558308/1457103993342918852/image.png?ex=695ac957&is=695977d7&hm=6ab740dd32accd7f173cb4213d401620951787b7394aad89e1a22c0dea7895ec&=&format=webp&quality=lossless',
      link: 'https://youtu.be/ncP24o4eyZM'
    },
    {
      id: 7,
      title: 'Combat FX and Anims',
      description: 'Clean VFX and trails that follow player fists, along animation that was used for a project including choppy animation',
      tags: ['VFX', 'Animations', 'Choppy'],
      image: 'https://media.discordapp.net/attachments/1329091508535558308/1457103993695244429/image.png?ex=695ac957&is=695977d7&hm=9fd460ec99f457ae6b1e0592e953d8beae7bd2fc2889083fb6d321814d714021&=&format=webp&quality=lossless',
      link: 'https://youtu.be/kOhxsiKaF4w'
    },
    {
      id: 8,
      title: 'Collect VFX',
      description: 'Emitters that spew currency or add impact to an interaction.',
      tags: ['VFX', 'Currency', 'Trails', 'Impact'],
      image: 'https://media.discordapp.net/attachments/1329091508535558308/1457103994215469333/image.png?ex=695ac957&is=695977d7&hm=23ab99ad0d043eceeaddd4ddbe73eb2ba8cf96914201c9920a95f3ec7f49b45b&=&format=webp&quality=lossless',
      link: 'https://youtu.be/ZKZfR6qrXMs'
    },
    {
      id: 9,
      title: 'Runes VFX',
      description: 'Idle VFX for character equippables',
      tags: ['VFX', 'Particles', 'Aura'],
      image: 'https://media.discordapp.net/attachments/1329091508535558308/1457103994735427645/image.png?ex=695ac958&is=695977d8&hm=aad00e05031805d5b66bd87cd9fd64f22025de93677abb8d32dd7155e7f0f7e4&=&format=webp&quality=lossless',
      link: 'https://youtu.be/ncP24o4eyZM'
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

