import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'

function Projects() {
  return (
    <div className='pb-4'>
        <motion.h2
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:2}}
        className='my-20 text-center text-4xl'>Projects</motion.h2>
        <div>
            {PROJECTS.map((project,index)=>(
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div className='w-full lg:w-1/4'
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:-100}}
                    transition={{duration:1}}>
                    <img src={project.image} alt={project.title} width={350} height={350} className='mb-6 rounded'/>
                    </motion.div>
                    <motion.div className='w-full max-w-xl lg:w-3/4'
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:100}}
                    transition={{duration:2}}>
                    <h3 className='mb-1 font-semibold text-2xl'>{project.title}</h3>
                    {project.subtitle && <p className='mb-2 text-sm text-stone-500 italic'>{project.subtitle}</p>}
                    <p className='mb-4 text-stone-400'>{project.description}</p>
                    <div className='flex flex-wrap gap-2 mb-4'>
                    {project.technologies.map((tech,index)=>(
                        <span className='rounded bg-stone-900 p-2 text-sm font-medium text-stone-300' key={index}>{tech}</span>
                    ))}
                    </div>
                    <div className='flex gap-4'>
                    {project.link && (
                        <a href={project.link} target='_blank' rel='noopener noreferrer' className='text-sm text-stone-400 underline hover:text-stone-200 transition-colors'>
                            View on GitHub →
                        </a>
                    )}
                    {project.liveLink && (
                        <a href={project.liveLink} target='_blank' rel='noopener noreferrer' className='text-sm text-stone-400 underline hover:text-stone-200 transition-colors'>
                            Live App →
                        </a>
                    )}
                    </div>
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects