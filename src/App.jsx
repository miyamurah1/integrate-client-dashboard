import Sidebar from "./components/Sidebar";
import ChartSection from "./components/ChartSection";
import Topbar from "./components/Topbar";
import StatCard from "./components/StatCard";
import InfoCard from "./components/InfoCard";
import "./App.css";

function App() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <Topbar />

        <div className="stats">
          <StatCard title="Total Revenue" value="$24,500" growth="+12%" />
          <StatCard title="Active Users" value="1,245" growth="+8%" />
          <StatCard title="New Signups" value="342" growth="+5%" />
        </div>

        <div className="grid">
          <ChartSection />
          <InfoCard title="Analytics Overview" />
          <InfoCard title="Room Occupancy" />
          <InfoCard title="Bookings Summary" />
          <InfoCard title="Calendar Section" />
        </div>
      </div>
    </div>
  );
}

export default App;