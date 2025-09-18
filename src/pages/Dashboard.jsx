export default function Dashboard({ user }) {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">
        Welcome, {user.name || user.adminName || user.recruiterName}!
      </h1>
      <p className="mb-6 text-gray-600">
        You are signed up as{" "}
        <span className="font-semibold capitalize">{user.role}</span>.
      </p>

      {/* Role specific dashboards */}
      {user.role === "student" && (
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">🎓 Student Profile</h2>
          <p><strong>College:</strong> {user.college}</p>
          <p><strong>Branch:</strong> {user.branch}</p>
          <p><strong>Registration No:</strong> {user.regNumber}</p>
          <p><strong>Graduation Year:</strong> {user.gradYear}</p>
        </div>
      )}

      {user.role === "alumni" && (
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">🏅 Alumni Profile</h2>
          <p><strong>College:</strong> {user.college}</p>
          <p><strong>Branch:</strong> {user.branch}</p>
          <p><strong>Graduation Year:</strong> {user.gradYear}</p>
          {user.specialization && <p><strong>Specialization:</strong> {user.specialization}</p>}
        </div>
      )}

      {user.role === "faculty" && (
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">👨‍🏫 Faculty/Admin Profile</h2>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Designation:</strong> {user.designation}</p>
          <p><strong>Department:</strong> {user.department}</p>
        </div>
      )}

      {user.role === "management" && (
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">🏫 Institution Admin</h2>
          <p><strong>Institution:</strong> {user.institution}</p>
          <p><strong>Admin Name:</strong> {user.adminName}</p>
        </div>
      )}

      {user.role === "employer" && (
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">💼 Recruiter Profile</h2>
          <p><strong>Company:</strong> {user.companyName}</p>
          <p><strong>Recruiter:</strong> {user.recruiterName}</p>
          <p><strong>Industry:</strong> {user.industry}</p>
        </div>
      )}
    </div>
  );
}
