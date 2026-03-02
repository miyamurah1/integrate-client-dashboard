import React from 'react';
import { 
  LayoutDashboard, Users, Calendar, Settings, 
  Bell, Search, Plus, MoreHorizontal, ArrowUpRight,
  TrendingUp, CreditCard, PieChart
} from 'lucide-react';

// Reusable Sidebar Item Component
const SidebarItem = ({ icon: Icon, label, active = false }) => (
  <div className={`flex items-center gap-3 px-4 py-3 cursor-pointer rounded-xl transition-all ${active ? 'bg-[#FF6B00] text-white shadow-lg shadow-orange-500/20' : 'text-gray-400 hover:bg-gray-800'}`}>
    <Icon size={20} />
    <span className="font-medium">{label}</span>
  </div>
);

// Reusable Stats Card Component
const StatCard = ({ title, value, change, icon: Icon, color }) => (
  <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col gap-4">
    <div className="flex justify-between items-start">
      <div className={`p-3 rounded-2xl ${color}`}>
        <Icon size={22} className="text-white" />
      </div>
      <span className={`text-xs font-bold px-2 py-1 rounded-full ${change.includes('+') ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
        {change}
      </span>
    </div>
    <div>
      <p className="text-gray-500 text-sm font-medium">{title}</p>
      <h3 className="text-2xl font-bold text-gray-900 mt-1">{value}</h3>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="flex min-h-screen bg-[#F3F4F6] font-sans">
      {/* SIDEBAR - Dark and sleek like the design */}
      <aside className="w-72 bg-[#0F1113] p-8 flex flex-col gap-10 hidden lg:flex sticky top-0 h-screen">
        <div className="flex items-center gap-3 px-2 text-white">
          <div className="w-10 h-10 bg-[#FF6B00] rounded-2xl flex items-center justify-center shadow-lg shadow-orange-600/30">
            <span className="text-xl font-black italic">I</span>
          </div>
          <span className="text-2xl font-bold tracking-tight">Integrate</span>
        </div>
        
        <nav className="flex flex-col gap-3">
          <p className="text-gray-600 text-[10px] uppercase tracking-widest font-bold px-4 mb-2">Main Menu</p>
          <SidebarItem icon={LayoutDashboard} label="Dashboard" active />
          <SidebarItem icon={Calendar} label="Reservations" />
          <SidebarItem icon={Users} label="Guests" />
          <SidebarItem icon={TrendingUp} label="Analytics" />
          <SidebarItem icon={CreditCard} label="Payments" />
        </nav>

        <div className="mt-auto">
          <SidebarItem icon={Settings} label="Settings" />
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        {/* HEADER SECTION */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900">Hotel Dashboard</h1>
            <p className="text-gray-500 font-medium">Monitoring your performance for today.</p>
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:flex-none">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search anything..." 
                className="pl-12 pr-4 py-3 bg-white border-none rounded-2xl shadow-sm focus:ring-2 focus:ring-[#FF6B00] w-full md:w-64 outline-none transition-all" 
              />
            </div>
            <button className="p-3 bg-white rounded-2xl text-gray-600 shadow-sm border border-gray-50 hover:bg-gray-50">
              <Bell size={22} />
            </button>
            <button className="flex items-center gap-2 bg-[#0F1113] text-white px-6 py-3 rounded-2xl font-bold hover:bg-gray-800 transition-all shadow-xl shadow-black/10">
              <Plus size={20} />
              <span>Create</span>
            </button>
          </div>
        </header>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <StatCard title="Total Booking" value="12,540" change="+12.5%" icon={Calendar} color="bg-blue-500" />
          <StatCard title="Total Revenue" value="$64,200" change="+15.2%" icon={TrendingUp} color="bg-[#FF6B00]" />
          <StatCard title="Active Guests" value="842" change="-2.4%" icon={Users} color="bg-purple-500" />
          <StatCard title="Occupancy Rate" value="94.2%" change="+4.1%" icon={PieChart} color="bg-green-500" />
        </div>

        {/* RECENT BOOKINGS TABLE SECTION */}
        <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold text-gray-900">Recent Reservations</h2>
            <button className="text-gray-400 hover:text-gray-600 p-2"><MoreHorizontal /></button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-y-3">
              <thead>
                <tr className="text-gray-400 text-xs uppercase tracking-widest font-bold">
                  <th className="px-4 pb-4">Guest Name</th>
                  <th className="px-4 pb-4">Room Type</th>
                  <th className="px-4 pb-4">Check In</th>
                  <th className="px-4 pb-4">Status</th>
                  <th className="px-4 pb-4">Price</th>
                  <th className="px-4 pb-4"></th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { name: "Ashwin Kumar", room: "Superior Suite", date: "Feb 10, 2026", status: "Checked In", price: "$450.00" },
                  { name: "Elena Gilbert", room: "Deluxe Room", date: "Feb 11, 2026", status: "Confirmed", price: "$280.00" },
                  { name: "Marcus Wright", room: "Executive Suite", date: "Feb 12, 2026", status: "Pending", price: "$510.00" },
                  { name: "Sophia Loren", room: "Standard Room", date: "Feb 12, 2026", status: "Confirmed", price: "$190.00" },
                ].map((item, i) => (
                  <tr key={i} className="bg-gray-50 hover:bg-gray-100 transition-colors group">
                    <td className="px-4 py-5 rounded-l-2xl font-bold text-gray-900">{item.name}</td>
                    <td className="px-4 py-5 text-gray-600">{item.room}</td>
                    <td className="px-4 py-5 text-gray-500 font-medium">{item.date}</td>
                    <td className="px-4 py-5">
                      <span className={`px-4 py-1.5 rounded-xl text-xs font-bold ${
                        item.status === 'Checked In' ? 'bg-green-100 text-green-600' : 
                        item.status === 'Confirmed' ? 'bg-blue-100 text-blue-600' : 'bg-yellow-100 text-yellow-600'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-4 py-5 font-bold text-gray-900">{item.price}</td>
                    <td className="px-4 py-5 rounded-r-2xl text-right">
                      <button className="p-2 text-gray-300 group-hover:text-[#FF6B00] transition-colors"><ArrowUpRight size={18} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
