import { Link } from "react-router-dom";
import {
  FaUsers,
  FaChalkboardTeacher,
  FaBriefcase,
  FaHandshake,
  FaShieldAlt,
  FaCalendarCheck,
  FaStar,
  FaGraduationCap,
} from "react-icons/fa";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* 🔹 Hero Section */}
      <section
        className="pt-20 text-white py-20"
        style={{
          background:
            "linear-gradient(to right, rgb(14, 165, 233), rgb(63, 81, 181))",
        }}
      >
        <div className="container mx-auto px-6 md:px-20">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              className="md:w-1/2 mb-10 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Stay Connected With{" "}
                <span className="text-yellow-300">Smriti Connect</span>
              </h1>
              <p className="text-xl mb-8">
                A platform to unite alumni, alma mater, students, and faculty
                for lifelong connections, mentorship, and opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/login"
                  className="bg-white text-blue-700 hover:bg-blue-100 font-semibold py-3 px-6 rounded-lg transition duration-300 text-center"
                >
                  Explore Network
                </Link>
                <Link
                  to="/register"
                  className="bg-transparent hover:bg-blue-700 border-2 border-white font-semibold py-3 px-6 rounded-lg transition duration-300 text-center"
                >
                  Join Now
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="md:w-1/2 flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <img
                src="/images/alumni_connect_photo.jpg"
                alt="home"
                className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

   <section className="py-16 bg-white">
  <div className="container mx-auto px-6 md:px-20">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <motion.div
        className="bg-blue-50 p-6 rounded-lg"
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl font-bold text-blue-600 mb-2">10,000+</h3>
        <p className="text-gray-700">Alumni Connected</p>
      </motion.div>

      <motion.div
        className="bg-green-50 p-6 rounded-lg"
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className="text-3xl font-bold text-green-600 mb-2">500+</h3>
        <p className="text-gray-700">Industry Mentors</p>
      </motion.div>

      <motion.div
        className="bg-purple-50 p-6 rounded-lg"
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3 className="text-3xl font-bold text-purple-600 mb-2">2,000+</h3>
        <p className="text-gray-700">Jobs & Internships</p>
      </motion.div>

      <motion.div
        className="bg-orange-50 p-6 rounded-lg"
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h3 className="text-3xl font-bold text-orange-600 mb-2">100+</h3>
        <p className="text-gray-700">Global Chapters</p>
      </motion.div>
    </div>
  </div>
</section>


      {/* 🔹 How It Works */}
      <section className="py-16 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 md:px-20">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              How Smriti Connect Works
            </motion.h2>
            <motion.p
              className="text-xl max-w-3xl mx-auto text-blue-100"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Our platform makes it simple to connect, collaborate, and grow.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaUsers className="text-2xl text-white" />,
                title: "Connect",
                text: "Reconnect with classmates and build global professional networks.",
                gradient: "from-blue-500 to-blue-700",
              },
              {
                icon: <FaChalkboardTeacher className="text-2xl text-white" />,
                title: "Learn & Mentor",
                text: "Share your expertise or gain guidance from alumni mentors.",
                gradient: "from-green-500 to-green-700",
              },
              {
                icon: <FaBriefcase className="text-2xl text-white" />,
                title: "Opportunities",
                text: "Discover jobs, internships, and collaborations within the alumni network.",
                gradient: "from-purple-500 to-purple-700",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${card.gradient} rounded-full flex items-center justify-center mx-auto mb-4 shadow-md`}
                >
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-20">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Why Smriti Connect?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              A one-stop alumni engagement platform designed to strengthen bonds
              beyond graduation.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaHandshake className="text-xl text-blue-600" />,
                title: "Strong Network",
                text: "Build long-lasting relationships with alumni and industry leaders.",
                bg: "blue",
              },
              {
                icon: <FaShieldAlt className="text-xl text-green-600" />,
                title: "Verified Alumni",
                text: "Every profile is verified to maintain trust and authenticity.",
                bg: "green",
              },
              {
                icon: <FaCalendarCheck className="text-xl text-orange-600" />,
                title: "Events & Reunions",
                text: "Stay updated about alumni meets, reunions, and webinars.",
                bg: "orange",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-start p-6 bg-gray-50 rounded-lg"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <div className="mr-4">
                  <div
                    className={`w-12 h-12 bg-${item.bg}-100 rounded-full flex items-center justify-center`}
                  >
                    {item.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 Testimonials */}
      <section className="py-16 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 md:px-20 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            What Alumni Say
          </motion.h2>
          <motion.p
            className="text-xl mb-8 max-w-3xl mx-auto text-blue-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.9 }}
          >
            Hear from our alumni who have reconnected and grown through Smriti
            Connect.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rahul Sharma",
                initials: "RS",
                text: "Smriti Connect helped me reconnect with my classmates and discover great career opportunities.",
                gradient: "from-blue-500 to-blue-700",
              },
              {
                name: "Anjali Patel",
                initials: "AP",
                text: "I found amazing mentors here who guided me during my early career stage.",
                gradient: "from-green-500 to-green-700",
              },
              {
                name: "Mohit Kumar",
                initials: "MK",
                text: "The event updates are fantastic. I never miss a reunion now!",
                gradient: "from-purple-500 to-purple-700",
              },
            ].map((t, index) => (
              <motion.div
                key={index}
                className="bg-white/95 backdrop-blur-sm text-gray-900 p-8 rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 bg-gradient-to-br ${t.gradient} text-white shadow-md`}
                  >
                    <span className="font-bold">{t.initials}</span>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold">{t.name}</h4>
                    <div className="flex text-yellow-400">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
                <p className="italic text-gray-700">"{t.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 Final Call-to-Action */}
      <section className="py-16 bg-white text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Ready to Reconnect?
        </motion.h2>
        <motion.p
          className="text-xl mb-8 max-w-3xl mx-auto text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          Join thousands of alumni worldwide and strengthen your lifelong bond
          with Smriti Connect.
        </motion.p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/register"
              className="bg-blue-600 text-white hover:bg-blue-700 font-semibold py-3 px-8 rounded-lg transition duration-300"
            >
              Sign Up Now
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/login"
              className="bg-transparent hover:bg-blue-600 border-2 border-blue-600 text-blue-600 font-semibold py-3 px-8 rounded-lg transition duration-300"
            >
              Explore Network
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;












// import React, { useState } from "react";

// export default function Login() {
//   const [tab, setTab] = useState("login");

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
//       {/* Website name in middle */}
//       <h1 className="text-3xl font-bold text-blue-600 mb-6">Smriti Connect</h1>

//       <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">
//         {/* Tabs */}
//         <div className="flex justify-center space-x-6 mb-6">
//           <button
//             onClick={() => setTab("login")}
//             className={`px-4 py-2 rounded-lg font-semibold transition ${
//               tab === "login"
//                 ? "bg-blue-500 text-white"
//                 : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//             }`}
//           >
//             Login
//           </button>
//           <button
//             onClick={() => setTab("signup")}
//             className={`px-4 py-2 rounded-lg font-semibold transition ${
//               tab === "signup"
//                 ? "bg-blue-500 text-white"
//                 : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//             }`}
//           >
//             Sign Up
//           </button>
//         </div>

//         {/* Login Form */}
//         {tab === "login" && (
//           <form className="space-y-4">
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
//             />
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
//             >
//               Login
//             </button>
//           </form>
//         )}

//         {/* Signup Form */}
//         {tab === "signup" && (
//           <form className="space-y-4">
//             <input
//               type="text"
//               placeholder="Full Name"
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
//             />
//             <button
//               type="submit"
//               className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
//             >
//               Sign Up
//             </button>
//           </form>
//         )}
//       </div>

//       {/* Redirect option */}
//       <p className="mt-4 text-gray-700">
//         Don’t have an account?{" "}
//         <button
//           onClick={() => setTab("signup")}
//           className="text-blue-500 hover:underline font-semibold"
//         >
//           Sign up now
//         </button>
//       </p>

//       {/* ✅ Global Counter with Coloring */}
//       <div className="mt-6">
//         <span className="text-xl font-bold">
//           Global Counter:{" "}
//           <span className="text-red-500">10</span> {/* 🔴 Always red */}
//         </span>
//       </div>
//     </div>
//   );
// }
