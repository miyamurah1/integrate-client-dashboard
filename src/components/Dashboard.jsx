import Header from "./Header";
import Card from "./Card";

const stats = [
  { title: "Total Revenue", value: "$24,500" },
  { title: "Active Users", value: "1,245" },
  { title: "New Signups", value: "342" }
];

function Dashboard() {
  return (
    <div
      style={{
        flex: 1,
        padding: "40px",
        backgroundColor: "#f3f4f6",
        minHeight: "100vh"
      }}
    >
      <Header />

      <div
        style={{
          display: "flex",
          gap: "24px",
          marginTop: "30px",
          flexWrap: "wrap"
        }}
      >
        {stats.map((stat, index) => (
          <Card key={index} title={stat.title} value={stat.value} />
        ))}
      </div>

      <div
        style={{
          marginTop: "40px",
          backgroundColor: "white",
          height: "280px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
          padding: "20px"
        }}
      >
        <h3>Analytics Overview</h3>
        <p style={{ color: "#6b7280", marginTop: "10px" }}>
          Chart section placeholder
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
