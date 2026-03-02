function Sidebar() {
  return (
    <div style={{
      width: "220px",
      height: "100vh",
      backgroundColor: "#111827",
      color: "white",
      padding: "20px"
    }}>
      <h2>Integrate</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>Dashboard</li>
        <li>Analytics</li>
        <li>Reports</li>
        <li>Settings</li>
      </ul>
    </div>
  );
}

export default Sidebar;