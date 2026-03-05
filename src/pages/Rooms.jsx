import "./Rooms.css";

export default function Rooms() {
  const rooms = [
    { id: "De-01", name: "Ocean View Suite",   type: "Deluxe", floor: 5, rate: "$350", status: "available", lastMaint: "Jan 1, 2025",  emoji: "🌊" },
    { id: "De-02", name: "Velvet Sky",         type: "Deluxe", floor: 5, rate: "$250", status: "cleaning",  lastMaint: "Jan 3, 2025",  emoji: "🛋️" },
    { id: "S-01",  name: "Garden Room",        type: "Single", floor: 2, rate: "$95",  status: "checkin",   lastMaint: "Dec 30, 2024", emoji: "🌿" },
    { id: "S-02",  name: "City Loft",          type: "Single", floor: 3, rate: "$110", status: "available", lastMaint: "Jan 2, 2025",  emoji: "🏙️" },
    { id: "S-03",  name: "Cozy Corner",        type: "Single", floor: 2, rate: "$95",  status: "checkout",  lastMaint: "Jan 4, 2025",  emoji: "☕" },
    { id: "T-05",  name: "Twin Harmony",       type: "Twin",   floor: 3, rate: "$175", status: "checkin",   lastMaint: "Dec 28, 2024", emoji: "🌙" },
    { id: "T-07",  name: "Blossom Twin",       type: "Twin",   floor: 4, rate: "$180", status: "available", lastMaint: "Jan 3, 2025",  emoji: "🌸" },
    { id: "K-02",  name: "King's Retreat",     type: "King",   floor: 6, rate: "$420", status: "checkin",   lastMaint: "Jan 1, 2025",  emoji: "👑" },
    { id: "K-11",  name: "Presidential Suite", type: "King",   floor: 7, rate: "$600", status: "checkin",   lastMaint: "Dec 29, 2024", emoji: "🏛️" },
  ];

  const statusLabel = { available: "Available", checkin: "Check-in", checkout: "Check-out", cleaning: "To clean" };

  return (
    <div>
      <div className="page-header">
        <h1>Rooms</h1>
        <p>Manage room availability and details</p>
      </div>
      <div className="grid-4" style={{ marginBottom: 24 }}>
        {[
          { label: "Total Rooms",    value: "48" },
          { label: "Available",      value: "18" },
          { label: "Occupied",       value: "26" },
          { label: "Under Cleaning", value: "4"  },
        ].map((s) => (
          <div key={s.label} className="card stat-card">
            <span className="label">{s.label}</span>
            <span className="value">{s.value}</span>
          </div>
        ))}
      </div>
      <div className="rooms-grid">
        {rooms.map((r) => (
          <div key={r.id} className="card room-item">
            <div className="room-item-header">
              <div className="room-emoji">{r.emoji}</div>
              <span className={`badge ${r.status}`}>{statusLabel[r.status]}</span>
            </div>
            <div className="room-item-name">{r.name}</div>
            <div className="room-item-type">{r.type} · Floor {r.floor}</div>
            <div className="room-item-meta">
              <div><div className="meta-label">Room No.</div><div className="meta-val">{r.id}</div></div>
              <div><div className="meta-label">Rate/night</div><div className="meta-val">{r.rate}</div></div>
              <div><div className="meta-label">Last Maint.</div><div className="meta-val" style={{fontSize:11}}>{r.lastMaint}</div></div>
            </div>
            <button className="room-btn">Room details ↗</button>
          </div>
        ))}
      </div>
    </div>
  );
}