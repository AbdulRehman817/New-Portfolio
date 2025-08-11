// import { useState } from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

// export default function Contact() {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.2,
//   });

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = () => {
//     // Optionally handle form submission logic here (e.g., send email)
//     // After submission, clear the fields
//     setName("");
//     setEmail("");
//     setMessage("");
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <section ref={ref} className="py-20 bg-gray-800">
//       <div className="max-w-6xl mx-auto px-4">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-3xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"
//         >
//           Get In Touch
//         </motion.h2>

//         <div className="grid lg:grid-cols-2 gap-12">
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate={inView ? "visible" : "hidden"}
//             className="space-y-6"
//           >
//             <motion.div variants={itemVariants}>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
//                 Name
//               </label>
//               <motion.input
//                 whileFocus={{ scale: 1.02 }}
//                 type="text"
//                 id="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
//                 placeholder="Your name"
//               />
//             </motion.div>
//             <motion.div variants={itemVariants}>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
//                 Email
//               </label>
//               <motion.input
//                 whileFocus={{ scale: 1.02 }}
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
//                 placeholder="your@email.com"
//               />
//             </motion.div>
//             <motion.div variants={itemVariants}>
//               <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
//                 Message
//               </label>
//               <motion.textarea
//                 whileFocus={{ scale: 1.02 }}
//                 id="message"
//                 rows={6}
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white resize-none"
//                 placeholder="Your message..."
//               />
//             </motion.div>
//             <motion.button
//               onClick={handleSubmit}
//               variants={itemVariants}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all relative overflow-hidden group"
//             >
//               <span className="relative z-10">Send Message</span>
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500"
//                 initial={{ x: "-100%" }}
//                 whileHover={{ x: 0 }}
//                 transition={{ duration: 0.3 }}
//               />
//             </motion.button>
//           </motion.div>

//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate={inView ? "visible" : "hidden"}
//             className="lg:pl-12"
//           >
//             <div className="space-y-8">
//               <motion.div
//                 variants={itemVariants}
//                 whileHover={{ x: 10 }}
//                 className="flex items-start space-x-4"
//               >
//                 <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
//                   <Mail className="w-6 h-6 text-blue-500" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
//                   <a
//                     href="mailto:contact@example.com"
//                     className="text-gray-400 hover:text-white transition-colors"
//                   >
//                     abdulrehmanbey1718@gmail.com
//                   </a>
//                 </div>
//               </motion.div>

//               <motion.div
//                 variants={itemVariants}
//                 whileHover={{ x: 10 }}
//                 className="flex items-start space-x-4"
//               >
//                 <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
//                   <Phone className="w-6 h-6 text-blue-500" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
//                   <a
//                     href="tel:+1234567890"
//                     className="text-gray-400 hover:text-white transition-colors"
//                   >
//                     +(92)3313301452
//                   </a>
//                 </div>
//               </motion.div>

//               <motion.div
//                 variants={itemVariants}
//                 whileHover={{ x: 10 }}
//                 className="flex items-start space-x-4"
//               >
//                 <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
//                   <MapPin className="w-6 h-6 text-blue-500" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
//                   <p className="text-gray-400">Pakistan Karachi</p>
//                 </div>
//               </motion.div>

//               <motion.div variants={itemVariants} className="pt-8">
//                 <h3 className="text-lg font-semibold text-white mb-4">Follow Me</h3>
//                 <div className="flex space-x-4">
//                   <motion.a
//                     href="https://github.com/AbdulRehman817"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center hover:bg-blue-500/20 transition-colors"
//                     whileHover={{ scale: 1.1, rotate: 5 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <Github className="w-5 h-5 text-blue-500" />
//                   </motion.a>
//                   <motion.a
//                     href="https://linkedin.com/in/abdul-rehman-7aa108328/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center hover:bg-blue-500/20 transition-colors"
//                     whileHover={{ scale: 1.1, rotate: -5 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <Linkedin className="w-5 h-5 text-blue-500" />
//                   </motion.a>
//                   <motion.a
//                     href="mailto:abdulrehmanbey1718@gmail.com"
//                     className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center hover:bg-blue-500/20 transition-colors"
//                     whileHover={{ scale: 1.1, rotate: 5 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <Mail className="w-5 h-5 text-blue-500" />
//                   </motion.a>
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section ref={ref} className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"
        >
          Get In Touch
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Name
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                placeholder="Your name"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                placeholder="your@email.com"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Message
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                id="message"
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white resize-none"
                placeholder="Your message..."
              />
            </motion.div>

            <motion.button
              onClick={handleSubmit}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all relative overflow-hidden group"
            >
              <span className="relative z-10">Send Message</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>

          {/* Contact Info */}
          <div className="lg:pl-12 space-y-8 pt-[29px]">
            {[
              {
                icon: <Mail className="w-6 h-6 text-blue-500" />,
                title: "Email",
                value: "abdulrehmanbey1718@gmail.com",
                href: "mailto:abdulrehmanbey1718@gmail.com",
              },
              {
                icon: <Phone className="w-6 h-6 text-blue-500" />,
                title: "Phone",
                value: "+(92)3313301452",
                href: "tel:+923313301452",
              },
              {
                icon: <MapPin className="w-6 h-6 text-blue-500" />,
                title: "Location",
                value: "Pakistan Karachi",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                whileHover={{ x: 10 }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {item.title}
                  </h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-400">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="pt-8"
            >
              <h3 className="text-lg font-semibold text-white mb-4">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                {[
                  {
                    icon: <Github className="w-5 h-5 text-blue-500" />,
                    href: "https://github.com/AbdulRehman817",
                    rotate: 5,
                  },
                  {
                    icon: <Linkedin className="w-5 h-5 text-blue-500" />,
                    href: "https://linkedin.com/in/abdul-rehman-7aa108328/",
                    rotate: -5,
                  },
                  {
                    icon: <Mail className="w-5 h-5 text-blue-500" />,
                    href: "mailto:abdulrehmanbey1718@gmail.com",
                    rotate: 5,
                  },
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center hover:bg-blue-500/20 transition-colors"
                    whileHover={{ scale: 1.1, rotate: social.rotate }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
