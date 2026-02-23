import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope, FaFileDownload } from "react-icons/fa";
import {resume} from "../assets";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

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

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Abdullah Ahmed",
          from_email: form.email,
          to_email: "abdullah.ahmed.pisces1010@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">

      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-6"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="bg-tertiary py-4 px-6 text-white rounded-lg outline-none border-none"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="bg-tertiary py-4 px-6 text-white rounded-lg outline-none border-none"
          />

          <textarea
            rows={5}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="bg-tertiary py-4 px-6 text-white rounded-lg outline-none border-none"
          />

          <button
            type="submit"
            className="bg-purple-600 py-3 px-8 rounded-xl text-white font-bold shadow-md hover:bg-purple-700 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        <div className="mt-10 border-t border-gray-700 pt-6 space-y-4">

          <div className="flex items-center gap-3 text-white">
            <FaPhone className="text-purple-400" />
            <a href="tel:+91XXXXXXXXXX" className="hover:underline">
              +91 8100432390
            </a>
          </div>

          <div className="flex items-center gap-3 text-white">
            <FaEnvelope className="text-purple-400" />
            <a
              href="mailto:abdullah.ahmed.pisces1010@gmail.com"
              className="hover:underline"
            >
              abdullah.ahmed.pisces1010@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3 text-white">
            <FaGithub className="text-purple-400" />
            <a
              href="https://github.com/YOUR_GITHUB_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              github.com/AbdullahAhmed-1010
            </a>
          </div>

          <div className="flex items-center gap-3 text-white">
            <FaLinkedin className="text-purple-400" />
            <a
              href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              linkedin.com/in/abdullah-ahmed-8b1351320
            </a>
          </div>

          <div className="flex items-center gap-3 text-white">
            <FaFileDownload className="text-purple-400" />
            <a
              href={resume}
              download = "abdullah ahmed.pdf"
              className="hover:underline"
            >
              Download Resume
            </a>
          </div>

        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
