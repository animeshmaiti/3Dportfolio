import { React, useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send('service_liaf60n',
     'template_fhiefjg',
     {
        name: form.name,
        message: form.message,
        email: form.email,
     },
     'LfWnA8yeQ58g9TeG0'
     )
      .then(() => {
        setLoading(false);
        alert("Message sent successfully!");
        setForm({
          name: "",
          email: "",
          message: "",
        }, (error) =>{
          console.log(error);
          alert("Message not sent!");
        });
      })
  };

  return (
    <div
      className="xl:mt-12 xl:flex-row
     flex-col-reverse flex gap-10 overflow-hidden"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your name
            </span>
            <input 
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="bg-tertiary p-4 placeholder:text-secondary
              rounded-lg outline-none border-none text-white"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your Email
            </span>
            <input 
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="bg-tertiary p-4 placeholder:text-secondary
              rounded-lg outline-none border-none text-white"
            />
            
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your Message
            </span>
            <textarea 
              rows="7"
              type="text"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              style={{resize:"none"}}
              className="bg-tertiary p-4 placeholder:text-secondary 
              rounded-lg outline-none border-none text-white"
            />
          </label>
          <button
              type="submit"
              className="bg-tertiary py-3 px-8 w-fit text-white
              outline-none font-bold shadow-md shadow-primary rounded-xl"
            >
              {loading ? "Sending..." : "Send"}
            </button>
        </form>
      </motion.div>
      <motion.div 
       variants={slideIn("right","tween",0.2,1)}
       className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
       >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
