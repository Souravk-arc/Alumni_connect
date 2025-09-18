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
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Stay Connected With{" "}
                <span className="text-yellow-300">Smriti Connect</span>
              </h1>
              <p className="text-xl mb-8">
                A platform to unite alumni, alma mater, students, and faculty for lifelong
                connections, mentorship, and opportunities.
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
            </div>
           <div className="md:w-1/2 flex justify-center">
  <img
    src="/images/alumni_connect_photo.jpg"
    alt="home"
    className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain"
  />
</div>

          </div>
        </div>
      </section>

      {/* 🔹 Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">10,000+</h3>
              <p className="text-gray-700">Alumni Connected</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-3xl font-bold text-green-600 mb-2">500+</h3>
              <p className="text-gray-700">Industry Mentors</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-3xl font-bold text-purple-600 mb-2">2,000+</h3>
              <p className="text-gray-700">Jobs & Internships</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-3xl font-bold text-orange-600 mb-2">100+</h3>
              <p className="text-gray-700">Global Chapters</p>
            </div>
          </div>
        </div>
      </section>

     {/* 🔹 How It Works */}
<section className="py-16 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 text-white">
  <div className="container mx-auto px-6 md:px-20">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        How Smriti Connect Works
      </h2>
      <p className="text-xl max-w-3xl mx-auto text-blue-100">
        Our platform makes it simple to connect, collaborate, and grow.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-center hover:scale-105 transition">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
          <FaUsers className="text-2xl text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Connect</h3>
        <p className="text-gray-600">
          Reconnect with classmates and build global professional networks.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-center hover:scale-105 transition">
        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
          <FaChalkboardTeacher className="text-2xl text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Learn & Mentor</h3>
        <p className="text-gray-600">
          Share your expertise or gain guidance from alumni mentors.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-center hover:scale-105 transition">
        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
          <FaBriefcase className="text-2xl text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Opportunities</h3>
        <p className="text-gray-600">
          Discover jobs, internships, and collaborations within the alumni network.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* 🔹 Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Smriti Connect?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A one-stop alumni engagement platform designed to strengthen bonds
              beyond graduation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start p-6 bg-gray-50 rounded-lg">
              <div className="mr-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FaHandshake className="text-xl text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Strong Network</h3>
                <p className="text-gray-600">
                  Build long-lasting relationships with alumni and industry
                  leaders.
                </p>
              </div>
            </div>

            <div className="flex items-start p-6 bg-gray-50 rounded-lg">
              <div className="mr-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <FaShieldAlt className="text-xl text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Verified Alumni</h3>
                <p className="text-gray-600">
                  Every profile is verified to maintain trust and authenticity.
                </p>
              </div>
            </div>

            <div className="flex items-start p-6 bg-gray-50 rounded-lg">
              <div className="mr-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <FaCalendarCheck className="text-xl text-orange-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Events & Reunions
                </h3>
                <p className="text-gray-600">
                  Stay updated about alumni meets, reunions, and webinars.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* 🔹 Testimonials */}
<section className="py-16 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 text-white">
  <div className="container mx-auto px-6 md:px-20 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      What Alumni Say
    </h2>
    <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
      Hear from our alumni who have reconnected and grown through Smriti Connect.
    </p>

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
        <div
          key={index}
          className="bg-white/95 backdrop-blur-sm text-gray-900 p-8 rounded-2xl shadow-lg hover:scale-105 transition"
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
        </div>
      ))}
    </div>
  </div>
</section>


      {/* 🔹 Final Call-to-Action */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Reconnect?
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-600">
          Join thousands of alumni worldwide and strengthen your lifelong bond
          with Smriti Connect.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/register"
            className="bg-blue-600 text-white hover:bg-blue-700 font-semibold py-3 px-8 rounded-lg transition duration-300"
          >
            Sign Up Now
          </Link>
          <Link
            to="/login"
            className="bg-transparent hover:bg-blue-600 border-2 border-blue-600 text-blue-600 font-semibold py-3 px-8 rounded-lg transition duration-300"
          >
            Explore Network
          </Link>
        </div>
      </section>

    
    </div>
  );
};

export default HomePage;
