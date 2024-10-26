import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { sectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  //index,title,icon are used as props
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        {/* //fadeIn function faede from the right and the type is string,faded according to the index and trasition time is 0.75 */}
        {/* tilt options */}
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
        {/* //to make all the elements or components follow the same margin
  we create another component called hoc folder
  and there we will open a section wrapper.js file */}
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
     <section id="about">
      <motion.div variants={textVariant()} className="mt-20">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      {/* The fadeIn() method gradually changes the opacity, 
for selected elements, from hidden to visible (fading effect).
Note: Hidden elements will not be displayed at all 
(no longer affects the layout of the page).
syntax: $(selector).fadeIn(speed,easing,callback) */}

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with experience in Typescript and
        Javascript and expertise in frameworks like
        React,Angular,Three.js,Next.js for frontened and
        Node.js,Express,MongoDb,MySql for Backend. I am a quick Learner and
        passionate about creating user frinedly,efficient sofdtware solutions
        that can solve real life problems.<br></br>
        <b className={styles.boldText}>
          LET'S WORK TOGETHER TO BRING YOUR IDEAS TO LIFE {"\u2764\uFE0F"}
        </b>
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      </section>
    </>
  );
};

export default sectionWrapper(About,"about");
//component,id
// so we will wrap iothe components in the section wrapper so it will wrap all over the components not just in one compoinent
