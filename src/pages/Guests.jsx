export default function Guests() {
  const guests = [
    { id: 1, name: "Alex Trie",      email: "alex@email.com",    room: "S-01",  checkIn: "Jan 5",  checkOut: "Jan 8",  status: "checkin",  total: "$82.50",   color: "#7c5cfc" },
    { id: 2, name: "Kris Black",     email: "kris@email.com",    room: "De-02", checkIn: "Jan 7",  checkOut: "Jan 10", status: "checkin",  total: "$750.00",  color: "#3b82f6" },
    { id: 3, name: "Annette Black",  email: "annette@email.com", room: "T-05",  checkIn: "Jan 8",  checkOut: "Jan 9",  status: "checkout", total: "$210.00",  color: "#f59e0b" },
    { id: 4, name: "Jerome Bell",    email: "jerome@email.com",  room: "K-11",  checkIn: "Jan 9",  checkOut: "Jan 12", status: "checkin",  total: "$430.00",  color: "#22c55e" },
    { id: 5, name: "Joanna Bell",    email: "joanna@email.com",  room: "S-03",  checkIn: "Jan 10", checkOut: "Jan 11", status: "checkout", total: "$95.00",   color: "#ec4899" },
    { id: 6, name: "Jenny Wilson",   email: "jenny@email.com",   room: "De-04", checkIn: "Jan 11", checkOut: "Jan 15", status: "checkin",  total: "$1000.00", color: "#a78bfa" },
    { id: 7, name: "Kristin Watson", email: "watson@email.com",  room: "T-07",  checkIn: "Jan 12", checkOut: "Jan 13", status: "checkout", total: "$175.00",  color: "#f97316" },
    { id: 8, name: "Cameron Diaz",   email: "cameron@email.com", room: "K-02",  checkIn: "Jan 13", checkOut: "Jan 16", status: "checkin",  total: "$540.00",  color: "#06b6d4" },
  ];

  return (
    <div>
      <div className="page-header">
        <h1>Guests</h1>
        <p>All current and recent hotel guests</p>
      </div>
      <div className="grid-4" style={{ marginBottom: 24 }}>
        {[
          { label: "Total Guests",   value: "128", change: "+12%", dir: "up" },
          { label: "Checked In",     value: "74",  change: "+5%",  dir: "up" },
          { label: "Checked Out",    value: "39",  change: "-3%",  dir: "down" },
          { label: "Expected Today", value: "15",  change: "+8%",  dir: "up" },
        ].map((s) => (
          <div key={s.label} className="card stat-card">
            <span className="label">{s.label}</span>
            <span className="value">{s.value}</span>
            <span className={`change ${s.dir}`}>{s.dir === "up" ? "▲" : "▼"} {s.change}</span>
          </div>
        ))}
      </div>
      <div className="card">
        <div className="section-title">Guest List</div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Guest</th><th>Room</th><th>Check In</th><th>Check Out</th><th>Status</th><th>Total</th>
              </tr>
            </thead>
            <tbody>
              {guests.map((g) => (
                <tr key={g.id}>
                  <td>
                    <div className="flex items-center gap-8">
                      <div className="avatar" style={{ background: g.color }}>{g.name[0]}</div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: 14 }}>{g.name}</div>
                        <div style={{ fontSize: 12, color: "var(--muted)" }}>{g.email}</div>
                      </div>
                    </div>
                  </td>
                  <td style={{ fontWeight: 600 }}>{g.room}</td>
                  <td>{g.checkIn}</td>
                  <td>{g.checkOut}</td>
                  <td><span className={`badge ${g.status}`}>{g.status === "checkin" ? "Check-in" : "Check-out"}</span></td>
                  <td style={{ fontWeight: 700 }}>{g.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}