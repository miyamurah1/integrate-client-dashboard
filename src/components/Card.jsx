function Card({ title, value }) {
  return (
    <div style={{
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
      minWidth: "200px"
    }}>
      <h4 style={{ color: "#6b7280", fontSize: "14px" }}>
        {title}
      </h4>
      <p style={{ fontSize: "22px", fontWeight: "bold", marginTop: "8px" }}>
        {value}
      </p>
    </div>
  );
}

export default Card;