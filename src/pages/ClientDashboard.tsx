import { FaBuilding, FaFileAlt, FaUsers, FaBell, FaChartLine, FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ClientDashboard() {
  const navigate = useNavigate();

  const stats = [
    { label: "Active Properties", value: "12", icon: FaBuilding, trend: "+2 this month" },
    { label: "Compliance Rate", value: "94%", icon: FaCheckCircle, trend: "+3% from last month" },
    { label: "Pending Documents", value: "8", icon: FaFileAlt, trend: "3 urgent" },
    { label: "Total Residents", value: "248", icon: FaUsers, trend: "+15 this month" },
  ];

  const recentActivities = [
    { title: "Fire Safety Certificate uploaded", property: "Maple Heights", time: "2 hours ago" },
    { title: "Gas Safety Check completed", property: "Oak Residences", time: "5 hours ago" },
    { title: "New resident registered", property: "Pine Court", time: "1 day ago" },
    { title: "Electrical inspection scheduled", property: "Birch Towers", time: "2 days ago" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Header */}
      <header className="bg-[#1C3F3A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Client Dashboard</h1>
              <p className="text-sm text-white/80 mt-1">Welcome back, manage your properties and compliance</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                <FaBell className="text-xl" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center">3</span>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-800"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl text-[#1C3F3A]">
                  <stat.icon />
                </span>
                <span className="text-xs text-green-600 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full">
                  {stat.trend}
                </span>
              </div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
            <div className="p-6 border-b border-gray-200 dark:border-gray-800">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Activity</h2>
            </div>
            <div className="p-6 space-y-4">
              {recentActivities.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50"
                >
                  <div className="w-10 h-10 rounded-full bg-[#1C3F3A]/10 flex items-center justify-center">
                    <FaChartLine className="text-[#1C3F3A]" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 dark:text-white">{activity.title}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{activity.property}</p>
                  </div>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
            <div className="p-6 border-b border-gray-200 dark:border-gray-800">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Actions</h2>
            </div>
            <div className="p-6 space-y-3">
              <button className="w-full p-4 text-left rounded-lg bg-[#1C3F3A] text-white hover:bg-[#1C3F3A]/90 transition-colors">
                <span className="font-medium">Add New Property</span>
                <p className="text-sm text-white/70 mt-1">Register a new property</p>
              </button>
              <button className="w-full p-4 text-left rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <span className="font-medium text-gray-900 dark:text-white">Upload Document</span>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Add compliance documents</p>
              </button>
              <button className="w-full p-4 text-left rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <span className="font-medium text-gray-900 dark:text-white">Schedule Inspection</span>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Book a compliance check</p>
              </button>
              <button className="w-full p-4 text-left rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <span className="font-medium text-gray-900 dark:text-white">View Reports</span>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Generate compliance reports</p>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
