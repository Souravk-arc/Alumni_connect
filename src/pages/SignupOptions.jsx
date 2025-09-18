import { Link } from "react-router-dom";

const SignupOptions = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-4">
      <h1 className="text-4xl font-bold text-white mb-10">Join Smriti Connect</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Link
          to="/signup/alumni"
          className="p-8 rounded-xl bg-white hover:scale-105 transition text-center shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-2">Alumni</h2>
          <p className="text-gray-700">Reconnect and engage with your alma mater</p>
        </Link>

        <Link
          to="/signup/student"
          className="p-8 rounded-xl bg-white hover:scale-105 transition text-center shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-2">Current Students</h2>
          <p className="text-gray-700">Explore mentorships and internships</p>
        </Link>

        <Link
          to="/signup/faculty"
          className="p-8 rounded-xl bg-white hover:scale-105 transition text-center shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-2">Faculty</h2>
          <p className="text-gray-700">Connect with students and alumni</p>
        </Link>

        <Link
          to="/signup/admin"
          className="p-8 rounded-xl bg-white hover:scale-105 transition text-center shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-2">Institution Admin</h2>
          <p className="text-gray-700">Manage users and institution data</p>
        </Link>

        <Link
          to="/signup/employer"
          className="p-8 rounded-xl bg-white hover:scale-105 transition text-center shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-2">Employers / Recruiters</h2>
          <p className="text-gray-700">Post jobs and connect with students</p>
        </Link>
      </div>
    </div>
  );
};

export default SignupOptions;

