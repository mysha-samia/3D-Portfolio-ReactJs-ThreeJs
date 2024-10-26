import React from 'react';
import { VerticalTimeline ,VerticalTimelineElement} from 'react-vertical-timeline-component';
import{motion} from 'framer-motion';
//for our vertical timeline to work 
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { sectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';



import Background from 'three/src/renderers/common/Background.js';
const ExperienceCard =({experience})=>(
  <VerticalTimelineElement 
  contentStyle={{background:'#1d1836', color:'#fff'}}
  contentArrowStyle={{borderRight:"7px solid #232631"}}
  date ={experience.date}
  title={experience.title}
  iconStyle={{background:experience.iconBg}} icon={
  <div className="w-full h-full rounded-full overflow-hidden justify-center flex"><img src={experience.icon}
  alt={experience.company_name} className="w-full h-full object-cover" ></img></div>}>
    <div>
      <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{margin:0}}>{experience.company_name}</p>
    </div>
    <ul className='mt-5 list-disc ml-5 space-y-2'>
  {experience.points.map((point,index)=>(
    <li key={`experience-point-${index}`} className="text-white text-[14px]
    pl-1 tracking-wider">
      {point}
    </li>
    //tracking-wider gives more spacing
  ))}
    </ul>
  </VerticalTimelineElement>
);
const Experience = () => { 
  return (
   <>
   <motion.div variants={textVariant()}>
   <p className={styles.sectionSubText}>What I have done so far</p>
   <h2 className={styles.sectionHeadText}>Work Experience & Education</h2>
   </motion.div>
   <div className="mt-20 flex flex-col">
    <VerticalTimeline>
      {/* //now we have to loop over the experience  */}
      {experiences.map((experience,index)=>
      (
        
      <ExperienceCard key={index} experience={experience}/>
        
      ))}
    </VerticalTimeline>
   </div>
  </>
  )
}

export default sectionWrapper(Experience,"work")