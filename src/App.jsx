import Sidebar from "./components/Sidebar";
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
          <StatCard title="Total Revenue" value="$24,500" />
          <StatCard title="Active Users" value="1,245" />
          <StatCard title="New Signups" value="342" />
        </div>

        <div className="grid">
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