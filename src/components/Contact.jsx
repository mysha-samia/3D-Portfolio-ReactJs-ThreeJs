// `import React from "react";
// import { useState, useRef } from "react";
// import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";
// import { styles } from "../styles";
// //this (emailjs) is a tool for add functionality to the form
// import { EarthCanvas } from "./canvas";
// import { slideIn, textVariant } from "../utils/motion";
// import { sectionWrapper } from "../hoc";

// //templateid-template_f704q8o
// //service-id service_r0jc plm
// //private-key LpsgtyAqC04vstXtn85FH


// const Contact = () => {
//   const formRef = useRef();
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const handleChange = (e) => {
//     const {name,value} = e.target;
//     setForm ({...form,[name]:value})
//     // to update the name email message fields
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     //templateid-template_f704q8o
// //service-id service_r0jcplm
// //private-key LpsgtyAqC04vstXtn85FH
//     emailjs.send("service_r0jcplm","template_f704q8o",
//       {
//         from_name: form.name,
//         to_name: "Mysha",
//         from_email:form.email,
//         to_email:"myshatasnim11@gmail.com",
//         message:form.message,
//       },
//       "LpsgtyAqC04vstXtn85FH"
//     ).then(()=>{
//       setLoading(false);
//     })
//   };
//   return (
//     <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
//       <motion.div
//         variants={slideIn("left", "tween", 0.2, 1)}
//         className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
//       >
//         <p className={styles.sectionSubText}>Get In Touch</p>
//         <h3 className={styles.sectionHeadText}>Contact</h3>
//         <form
//           ref={formRef}
//           onSubmit={handleSubmit}
//           className="mt-12 flex flex-col gap-8"
//         >
//           <label className="flex flex-col">
//             <span className="text-white font-medium mb-4">Your Name :</span>
//             <input
//               type="text"
//               value={form.name}
//               onChange={handleChange}
//               placeholder="What's your name?"
//               className="bg-tertiary py-4 px-4 placeholder:text-secondary text-white rounded-lg outlined-none border-none font0-medium"
//             ></input>
//           </label>
//           {/* //email */}
//           <label className="flex flex-col">
//             <span className="text-white font-medium mb-4">Your Email :</span>
//             <input
//               type="email"
//               value={form.email}
//               onChange={handleChange}
//               placeholder="What's your email?"
//               className="bg-tertiary py-4 px-4 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
//             ></input>
//           </label>
//           {/* message */}
//           <label className="flex flex-col">
//             <span className="text-white font-medium mb-4">Your Message :</span>
//             <textarea rows="7"  
//             name="message"
//             value={form.message}
//             onChange={handleChange}
//             placeholder="Type Your Message .."
//             className="bg-tertiary py-4 px-4 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"></textarea>
//           </label>
//           <button type="submit" 
//           className="bg-tertiary py-3 px-8 ouline-none w-fit text-white
//           font-bold shadow-md shadow-primary rounded-xl"
//           > 
//             {loading ? "Sending..." : "Send"}
//           </button>
//           </form>
//       </motion.div>
//           {/* earth model */}
//           <motion.div variants={slideIn("right", "tween", 0.2, 1)}
//           className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
//            <EarthCanvas/>
//           </motion.div>
//     </div>
//   );
// };

// export default sectionWrapper(Contact, "contact");`




import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import { sectionWrapper } from "../hoc";

const SERVICE_ID = "service_r0jcplm";
const TEMPLATE_ID = "template_f704q8o";
const PRIVATE_KEY = "o8JCWFmvKJp2mP-17";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Mysha",
          from_email: form.email,
          to_email: "myshatasnim11@gmail.com",
          message: form.message,
        },
        PRIVATE_KEY
      )
      .then(() => {
        setLoading(false);
        setIsModalOpen(true); // Open modal on success
        console.log("Modal should open now"); // Debugging log
        setForm({
          name: "",
          email:"",
          message: ""
        })
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        setLoading(false);
        alert("Something went wrong!")
      });
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      {/* Contact Form */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get In Touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          {/* Name Input */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name :</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          {/* Email Input */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email :</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          {/* Message Input */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message :</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Type Your Message .."
              className="bg-tertiary py-4 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/* Earth Model */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>

      {/* Success Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          style={{ zIndex: 1000 }} // Ensures modal appears above everything
        >
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-80">
            <p className="text-xl text-black font-bold mb-4">Message Sent Successfully!<br></br>I will reach you soon {"\u2764\uFE0F"}</p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="bg-tertiary py-2 px-4 rounded-lg text-white font-bold shadow-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default sectionWrapper(Contact, "contact");


