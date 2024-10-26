import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';
import { styles } from '../styles';

const sectionWrapper = (Component,idName) => 
  function HOC (){
return (

  <motion.section variants={staggerContainer()} id='about'
   initial="hidden"
   whileInView="show"
   viewport={{once: true,amount:0.25}}
   className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
    {/* //for the scroll */}
 
    <span className="hash-span" id={idName}>
      &nbsp;
      </span>
   <Component />
  </motion.section>
)
}


export default sectionWrapper