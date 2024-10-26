// import React,{ useEffect, useState } from 'react'
// import { motion } from 'framer-motion';
// import { styles } from '../styles';
// import { sectionWrapper } from '../hoc';
// import { fadeIn,textVariant } from '../utils/motion';
// import { testimonials } from '../constants';
// const FeedbackCard =({index,testimonial,name,designation,company,link}) =>(
// <motion.div variants={fadeIn("","spring",index*0.5,0.75)}
// className="bg-black-200 p-10  items-center rounded-3xl xs:w-[320px] w-full shadow-lg shadow-[#915eff]">
//             {/* //fadeIN(direction,type,delay,iteration) */}
//    <p className="text-white font-black text-[48px]">"</p>
//     <div className="mt-1">
//       <p className='text-white tracking-wider text-[16px]'>{testimonial}</p>
//       <div className="mt-7 flex justify-between items-center gap-1">
//         <div className="flex-1 flex flex-col overflow-hidden">
//           <p className="text-white  font-bold text-[16px]">{name}</p>
//           <p className='text-secondary  break-words font-bold text-[14px]'>{designation}</p>
//           <p className='text-[#915eff]'>{company}</p>
//           <a href={link}>
//             <p className='blue-text-gradient underline'>{link}</p>
//           </a>
//         </div>
//       </div>
//     </div>

// </motion.div>
// )

// const Feedbacks = () => {
//   const [loading, setLoading] = useState(true);
//   const [feedbackData, setFeedbackData] = useState([]);

//   // Simulate fetching data
//   useEffect(() => {
//     const fetchFeedbacks = async () => {
//       // Simulate API call
//       const data = await new Promise(resolve =>
//         setTimeout(() => resolve(testimonials), 1000)
//       );
//       setFeedbackData(data);
//       setLoading(false); // Update loading state
//     };

//     fetchFeedbacks();
//   }, []);
//   return (
//     <div className="mt-12 bg-black-100 rounded-[20px]">
//       <div className={`${styles.padding} bg-tertiary
//         rounded-2xl min-h-[320px]`}>
//         <motion.div variants={textVariant()}>
//           <h2 className={styles.sectionHeadText}>Acheivements<br/>
//           &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;
//             &  Certifications ...</h2>
//         </motion.div>
//       </div>
//       <div className={`${styles.paddingX} -mt-20 py-6 pb-14 flex flex-wrap justify-center gap-10`}>
//         {testimonials.map((testimonial,index)=>(
//           <FeedbackCard key={testimonial.name}
//         index={index}
//       {...testimonial} />))}

//       </div>
//     </div>
//   )
// }

// export default sectionWrapper(Feedbacks, "feedbacks")

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles"; // Ensure you have a styles.js file with the necessary classes
import { sectionWrapper } from "../hoc";
import { fadeIn, textVariant1 } from "../utils/motion";
import { testimonials } from "../constants"; // Ensure your testimonials data is properly structured

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  link,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }} // Initial state before animation
    animate={{ opacity: 1, y: 0 }} // Target state after animation
    transition={{ delay: index * 0.5, type: "spring", duration: 0.75 }} // Customize delay and transition
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 items-center rounded-3xl xs:w-[400px] w-full shadow-lg shadow-[#915eff]"
  >
    <p className="text-white font-black text-[48px]">"</p>
    <div className="mt-1">
      <p className="text-white tracking-wider text-[16px]">{testimonial}</p>
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col overflow-hidden">
          <p className="text-white font-bold text-[16px] break-words">{name}</p>
          <p className="text-secondary flex flex-wrap object-contain font-bold text-[14px]">
            {designation}
          </p>
          <p className="text-[#915eff]">{company}</p>
          <a href={link} className="blue-text-gradient underline">
            {link}
          </a>
        </div>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  const [loading, setLoading] = useState(true);
  const [feedbackData, setFeedbackData] = useState([]);

  // Fetching testimonials data
  useEffect(() => {
    const fetchFeedbacks = async () => {
      // Simulating data fetching with the actual testimonials array
      const data = testimonials; // Replace with your actual fetching logic if needed
      console.log("Fetched Data:", data); // For debugging
      setFeedbackData(data);
      setLoading(false); // Set loading to false after data is fetched
    };

    fetchFeedbacks();
  }, []);

  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Initial state before animation
          animate={{ opacity: 1, y: 0 }} // Target state after animation
          variants={textVariant1()}
        >
          <p className={styles.sectionSubTextForFeedback}>
            Research publications And Course certifications....
          </p>
          <h2 className={styles.sectionHeadTextForFeedback}>
            Publications & Certifications
          </h2>
        </motion.div>
      </div>

      <div
        className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap justify-center gap-10`}
      >
        {loading ? (
          <p className="text-white">Loading...</p> // Display a loading message
        ) : (
          feedbackData.map((testimonial, index) => (
            <FeedbackCard
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default sectionWrapper(Feedbacks, "feedbacks");
