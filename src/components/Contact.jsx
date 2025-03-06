import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2'; // Import SweetAlert2

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef(null);

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
        "service_74j9c3o", // Service ID
        "template_617jiy3", // Template ID
        {
          from_name: form.name,
          to_name: "Salman BOUALOUCHI",
          from_email: form.email,
          to_email: "sboualouchi6@gmail.com", // Ton adresse e-mail
          message: form.message,
        },
        "Ah8I-udDEvVyVsPGH" // User ID
      )
      .then(
        () => {
          setLoading(false);

          // Alerte de succès stylée
          Swal.fire({
            title: 'Merci !',
            text: 'Je vous répondrai dès que possible.',
            icon: 'success', // Icône de succès
            confirmButtonText: 'OK',
            confirmButtonColor: '#61dafb', // Couleur du bouton
          });

          // Réinitialiser le formulaire
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);

          // Alerte d'erreur stylée
          Swal.fire({
            title: 'Erreur',
            text: 'Quelque chose s\'est mal passé !',
            icon: 'error', // Icône d'erreur
            confirmButtonText: 'OK',
            confirmButtonColor: '#ff4444', // Couleur du bouton
          });

          console.error("Erreur EmailJS :", error);
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label htmlFor="name" className="flex flex-col ">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              id="name"
              type="text"
              value={form.name}
              name="name"
              onChange={handleChange}
              placeholder="What's your name ?"
              className="text-white rounded-lg outline-none border-none
              font-medium placeholder:text-secondary
            bg-tertiary py-4 px-6"
            />
          </label>

          <label htmlFor="email" className="flex flex-col ">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              id="email"
              type="email"
              value={form.email}
              name="email"
              onChange={handleChange}
              placeholder="What's your email ?"
              className="text-white rounded-lg outline-none border-none
              font-medium placeholder:text-secondary
            bg-tertiary py-4 px-6"
            />
          </label>

          <label htmlFor="message" className="flex flex-col ">
            <span className="text-white font-medium mb-4">Your message</span>
            <textarea
              id="message"
              rows={7}
              value={form.message}
              name="message"
              onChange={handleChange}
              placeholder="What do you want to say ?"
              className="text-white rounded-lg outline-none border-none
              font-medium placeholder:text-secondary
            bg-tertiary py-4 px-6
              resize-y
            "
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
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