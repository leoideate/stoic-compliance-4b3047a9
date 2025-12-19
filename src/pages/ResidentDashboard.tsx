import { FaHome, FaFileAlt, FaWrench, FaBell, FaCalendarAlt, FaShieldAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ResidentDashboard() {
  const navigate = useNavigate();

  const propertyInfo = {
    name: "Maple Heights - Unit 4B",
    address: "123 Oak Street, London, SW1A 1AA",
    manager: "Johnson Property Management",
    moveInDate: "March 15, 2024",
  };

  const upcomingEvents = [
    { title: "Gas Safety Inspection", date: "Dec 28, 2025", time: "10:00 AM" },
    { title: "Fire Alarm Testing", date: "Jan 5, 2026", time: "2:00 PM" },
    { title: "Building Maintenance", date: "Jan 12, 2026", time: "9:00 AM" },
  ];

  const documents = [
    { name: "Tenancy Agreement", date: "Mar 15, 2024", status: "Active" },
    { name: "Gas Safety Certificate", date: "Nov 10, 2025", status: "Valid" },
    { name: "EPC Certificate", date: "Jan 20, 2024", status: "Valid" },
    { name: "Fire Safety Guide", date: "Mar 15, 2024", status: "Read" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Header */}
      <header className="bg-[#1C3F3A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Resident Portal</h1>
              <p className="text-sm text-white/80 mt-1">Your home, your documents, all in one place</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                <FaBell className="text-xl" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center">2</span>
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
        {/* Property Card */}
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-xl bg-[#1C3F3A]/10 flex items-center justify-center">
              <FaHome className="text-3xl text-[#1C3F3A]" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">{propertyInfo.name}</h2>
              <p className="text-gray-600 dark:text-gray-400 mt-1">{propertyInfo.address}</p>
              <div className="flex flex-wrap gap-4 mt-3">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Manager:</strong> {propertyInfo.manager}
                </span>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Move-in:</strong> {propertyInfo.moveInDate}
                </span>
              </div>
            </div>
            <span className="px-3 py-1 text-sm bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full">
              Active Tenancy
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Documents */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
            <div className="p-6 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">My Documents</h2>
              <button className="text-sm text-[#1C3F3A] hover:underline">View All</button>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                {documents.map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <FaFileAlt className="text-[#1C3F3A]" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{doc.name}</p>
                        <p className="text-xs text-gray-500">Uploaded: {doc.date}</p>
                      </div>
                    </div>
                    <span className="px-2 py-1 text-xs bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded">
                      {doc.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Events */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
              <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <FaCalendarAlt className="text-[#1C3F3A]" />
                  Upcoming
                </h2>
              </div>
              <div className="p-4 space-y-3">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                    <p className="font-medium text-gray-900 dark:text-white text-sm">{event.title}</p>
                    <p className="text-xs text-gray-500 mt-1">{event.date} at {event.time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full p-3 text-left rounded-lg bg-[#1C3F3A] text-white hover:bg-[#1C3F3A]/90 transition-colors flex items-center gap-3">
                  <FaWrench />
                  <span>Report an Issue</span>
                </button>
                <button className="w-full p-3 text-left rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center gap-3 text-gray-900 dark:text-white">
                  <FaShieldAlt />
                  <span>View Safety Info</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
