import { FaTools, FaCalendarCheck, FaClipboardList, FaBell, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ContractorDashboard() {
  const navigate = useNavigate();

  const stats = [
    { label: "Active Jobs", value: "5", icon: FaTools },
    { label: "Completed This Month", value: "18", icon: FaCalendarCheck },
    { label: "Pending Approvals", value: "3", icon: FaClipboardList },
  ];

  const upcomingJobs = [
    {
      id: 1,
      title: "Gas Safety Inspection",
      property: "Maple Heights - Unit 4B",
      address: "123 Oak Street, London",
      date: "Dec 28, 2025",
      time: "10:00 AM",
      status: "Scheduled",
    },
    {
      id: 2,
      title: "Electrical Certificate Renewal",
      property: "Oak Residences - Unit 12",
      address: "45 Birch Lane, Manchester",
      date: "Dec 29, 2025",
      time: "2:00 PM",
      status: "Scheduled",
    },
    {
      id: 3,
      title: "Fire Alarm Installation",
      property: "Pine Court - Unit 8A",
      address: "78 Cedar Road, Birmingham",
      date: "Dec 30, 2025",
      time: "9:00 AM",
      status: "Pending Confirmation",
    },
  ];

  const recentCompletions = [
    { title: "Boiler Service", property: "Willow Gardens", date: "Dec 18, 2025", rating: 5 },
    { title: "EPC Assessment", property: "Elm House", date: "Dec 16, 2025", rating: 5 },
    { title: "Gas Safety Check", property: "Cherry Apartments", date: "Dec 14, 2025", rating: 4 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Header */}
      <header className="bg-[#1C3F3A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Contractor Dashboard</h1>
              <p className="text-sm text-white/80 mt-1">Manage your jobs and schedules</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                <FaBell className="text-xl" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center">4</span>
              </button>
              <button
                onClick={() => navigate("/signin")}
                className="px-4 py-2 text-sm bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-800"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1C3F3A]/10 flex items-center justify-center">
                  <stat.icon className="text-2xl text-[#1C3F3A]" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upcoming Jobs */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
            <div className="p-6 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Upcoming Jobs</h2>
              <button className="text-sm text-[#1C3F3A] hover:underline">View Calendar</button>
            </div>
            <div className="p-6 space-y-4">
              {upcomingJobs.map((job) => (
                <div
                  key={job.id}
                  className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-[#1C3F3A]/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{job.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{job.property}</p>
                    </div>
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        job.status === "Scheduled"
                          ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                          : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                      }`}
                    >
                      {job.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <FaMapMarkerAlt className="text-[#1C3F3A]" />
                      {job.address}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <FaClock className="text-[#1C3F3A]" />
                      {job.date} at {job.time}
                    </span>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <button className="px-4 py-2 text-sm bg-[#1C3F3A] text-white rounded-lg hover:bg-[#1C3F3A]/90 transition-colors">
                      View Details
                    </button>
                    <button className="px-4 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300">
                      Get Directions
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Completions */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
              <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Completions</h2>
              </div>
              <div className="p-4 space-y-3">
                {recentCompletions.map((job, index) => (
                  <div key={index} className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white text-sm">{job.title}</p>
                        <p className="text-xs text-gray-500">{job.property}</p>
                      </div>
                      <div className="flex gap-0.5">
                        {[...Array(job.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-xs">★</span>
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">{job.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full p-3 text-left rounded-lg bg-[#1C3F3A] text-white hover:bg-[#1C3F3A]/90 transition-colors">
                  Submit Job Report
                </button>
                <button className="w-full p-3 text-left rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-900 dark:text-white">
                  Update Availability
                </button>
                <button className="w-full p-3 text-left rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-900 dark:text-white">
                  View Certifications
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
